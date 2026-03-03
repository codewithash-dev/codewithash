import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {});

const SUPPORTER_PRICE_ID = process.env.STRIPE_MEMBERSHIP_SUPPORTER_PRICE_ID;
const PLATINUM_PRICE_ID = process.env.STRIPE_MEMBERSHIP_PLATINUM_PRICE_ID;

/**
 * POST /api/checkout/membership-session
 * Body: { tier: "supporter" | "platinum" }
 * Returns: { url: string } for redirecting to Stripe Checkout
 */
export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 503 }
    );
  }

  let body: { tier?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const tier = body.tier === "supporter" || body.tier === "platinum" ? body.tier : null;
  if (!tier) {
    return NextResponse.json(
      { error: "Missing or invalid tier (use 'supporter' or 'platinum')" },
      { status: 400 }
    );
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

  if (tier === "supporter") {
    if (!SUPPORTER_PRICE_ID) {
      return NextResponse.json(
        { error: "Supporter membership is not configured" },
        { status: 400 }
      );
    }
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        line_items: [{ price: SUPPORTER_PRICE_ID, quantity: 1 }],
        success_url: `${baseUrl}/membership?success=supporter`,
        cancel_url: `${baseUrl}/membership`,
        metadata: { tier: "supporter" },
        allow_promotion_codes: true,
      });
      return NextResponse.json({ url: session.url });
    } catch (e) {
      console.error("Stripe membership (supporter) session failed:", e);
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }
  }

  if (tier === "platinum") {
    if (!PLATINUM_PRICE_ID) {
      return NextResponse.json(
        { error: "Platinum membership is not configured" },
        { status: 400 }
      );
    }
    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [{ price: PLATINUM_PRICE_ID, quantity: 1 }],
        success_url: `${baseUrl}/membership?success=platinum`,
        cancel_url: `${baseUrl}/membership`,
        metadata: { tier: "platinum" },
        allow_promotion_codes: true,
      });
      return NextResponse.json({ url: session.url });
    } catch (e) {
      console.error("Stripe membership (platinum) session failed:", e);
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
}
