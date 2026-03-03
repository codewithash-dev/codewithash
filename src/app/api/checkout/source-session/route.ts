import { NextRequest, NextResponse } from "next/server";
import { getProjectBySlug, getStripePriceIdForProject } from "@/data/projects";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {});

/**
 * POST /api/checkout/source-session
 * Body: { projectSlug: string }
 * Returns: { url: string } for redirecting to Stripe Checkout
 */
export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 503 }
    );
  }

  let body: { projectSlug?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const { projectSlug } = body;
  if (!projectSlug || typeof projectSlug !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid projectSlug" },
      { status: 400 }
    );
  }

  const project = getProjectBySlug(projectSlug);
  const priceId = getStripePriceIdForProject(projectSlug);
  if (!project || !priceId) {
    return NextResponse.json(
      { error: "Source code is not available for purchase for this project" },
      { status: 400 }
    );
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/projects/${projectSlug}/source?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/projects/${projectSlug}/source`,
      metadata: {
        projectSlug,
      },
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error("Stripe checkout session creation failed:", e);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
