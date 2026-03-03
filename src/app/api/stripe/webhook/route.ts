import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode === "payment" && session.payment_status === "paid") {
          const projectSlug = session.metadata?.projectSlug;
          const tier = session.metadata?.tier as string | undefined;
          const email =
            (session.customer_details?.email as string) ||
            (session.customer_email as string);
          if (email) {
            const normalizedEmail = email.trim().toLowerCase();
            if (projectSlug) {
              await prisma.userSourceAccess.upsert({
                where: {
                  email_projectSlug: {
                    email: normalizedEmail,
                    projectSlug,
                  },
                },
                create: {
                  email: normalizedEmail,
                  projectSlug,
                  source: "purchase",
                  stripeCustomerId: session.customer as string | undefined,
                },
                update: {},
              });
            }
            if (tier === "platinum") {
              await prisma.membership.upsert({
                where: { email: normalizedEmail },
                create: {
                  email: normalizedEmail,
                  stripeCustomerId: session.customer as string | undefined,
                  active: true,
                },
                update: { active: true, updatedAt: new Date() },
              });
            }
          }
        }
        if (session.mode === "subscription" && session.subscription) {
          // Optional: handle membership subscription
          const email =
            (session.customer_details?.email as string) ||
            (session.customer_email as string);
          if (email) {
            const normalizedEmail = email.trim().toLowerCase();
            await prisma.membership.upsert({
              where: { email: normalizedEmail },
              create: {
                email: normalizedEmail,
                stripeCustomerId: session.customer as string | undefined,
                stripeSubscriptionId: session.subscription as string,
                active: true,
              },
              update: {
                stripeSubscriptionId: session.subscription as string,
                active: true,
                updatedAt: new Date(),
              },
            });
          }
        }
        break;
      }
      case "customer.subscription.deleted":
      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;
        const membership = await prisma.membership.findFirst({
          where: { stripeCustomerId: customerId },
        });
        if (membership) {
          const active =
            event.type === "customer.subscription.updated" &&
            subscription.status === "active";
          await prisma.membership.update({
            where: { id: membership.id },
            data: {
              active,
              stripeSubscriptionId: subscription.id,
              updatedAt: new Date(),
            },
          });
        }
        break;
      }
      default:
        // Unhandled event type
        break;
    }
  } catch (e) {
    console.error("Webhook handler error:", e);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}
