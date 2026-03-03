import { NextRequest, NextResponse } from "next/server";
import { getProjectBySlug, getStripePriceIdForProject } from "@/data/projects";
import { canUserAccessSource } from "@/lib/source-access";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {});

export type AccessCheckResponse = {
  hasAccess: boolean;
  isMember?: boolean;
  canPurchase: boolean;
  projectTitle?: string;
  error?: string;
};

/**
 * GET /api/source/access?slug=...&session_id=...&email=...
 * - slug: project slug (required)
 * - session_id: Stripe Checkout Session ID (optional). If present and paid, we verify and grant access.
 * - email: optional, for cookie/session-based check (e.g. after checkout we might set email in cookie)
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const sessionId = searchParams.get("session_id");
  const emailParam = searchParams.get("email");

  if (!slug) {
    return NextResponse.json(
      { hasAccess: false, canPurchase: false, error: "Missing slug" },
      { status: 400 }
    );
  }

  const project = getProjectBySlug(slug);
  if (!project) {
    return NextResponse.json(
      { hasAccess: false, canPurchase: false, error: "Project not found" },
      { status: 404 }
    );
  }

  const canPurchase = !!getStripePriceIdForProject(slug);

  // If session_id provided, verify with Stripe and grant access if paid
  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["customer_details"],
      });
      if (session.payment_status === "paid" && session.metadata?.projectSlug === slug) {
        const email =
          (session.customer_details?.email as string) ||
          (session.customer_email as string);
        if (email) {
          const normalizedEmail = email.trim().toLowerCase();
          await prisma.userSourceAccess.upsert({
            where: {
              email_projectSlug: { email: normalizedEmail, projectSlug: slug },
            },
            create: {
              email: normalizedEmail,
              projectSlug: slug,
              source: "purchase",
              stripeCustomerId: session.customer as string | undefined,
            },
            update: {},
          });
          const result = await canUserAccessSource(normalizedEmail, slug);
          const res = NextResponse.json({
            hasAccess: true,
            isMember: result.isMember,
            canPurchase,
            projectTitle: project.title,
          } satisfies AccessCheckResponse);
          res.cookies.set("source_access_email", normalizedEmail, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 30,
          });
          return res;
        }
      }
    } catch (e) {
      console.error("Stripe session verification failed:", e);
      return NextResponse.json(
        { hasAccess: false, canPurchase, error: "Invalid session" },
        { status: 400 }
      );
    }
  }

  // Check by email (e.g. from cookie or query after checkout)
  const email = emailParam ?? null;
  if (email) {
    const result = await canUserAccessSource(email, slug);
    return NextResponse.json({
      hasAccess: result.hasAccess,
      isMember: result.isMember,
      canPurchase,
      projectTitle: project.title,
    } satisfies AccessCheckResponse);
  }

  return NextResponse.json({
    hasAccess: false,
    canPurchase,
    projectTitle: project.title,
  } satisfies AccessCheckResponse);
}
