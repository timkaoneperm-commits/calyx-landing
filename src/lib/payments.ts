/**
 * Payment provider stub for CALYX checkout.
 *
 * Primary (RU): ЮKassa (YooKassa)
 * Fallback / intl: Stripe
 *
 * IMPORTANT: Live payments are NOT wired. This module only defines the
 * shape of a future integration. Do not claim checkout charges cards.
 */

export type PaymentProvider = "yookassa" | "stripe";

export type CheckoutIntent = {
  flavorId: string;
  quantity: number;
  currency: "RUB";
  /** Amount in minor units (kopecks) when real pricing lands */
  amountMinor?: number;
};

export type PaymentSession = {
  provider: PaymentProvider;
  /** Placeholder id — real session comes from provider SDK / API */
  sessionId: string;
  status: "stub";
  checkoutUrl: null;
};

/**
 * Resolve which provider to use once env is configured.
 * Default preference for RU market: ЮKassa.
 */
export function resolvePaymentProvider(): PaymentProvider {
  // TODO(payments): Prefer ЮKassa when YOOKASSA_SHOP_ID + YOOKASSA_SECRET_KEY are set.
  // TODO(payments): Fall back to Stripe when STRIPE_SECRET_KEY is set and ЮKassa is absent.
  const prefer =
    (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER as PaymentProvider | undefined) ??
    "yookassa";
  return prefer === "stripe" ? "stripe" : "yookassa";
}

/**
 * Create a payment session for cart checkout.
 * Currently returns a non-functional stub — no network calls, no keys used.
 */
export async function createPaymentSession(
  intent: CheckoutIntent,
): Promise<PaymentSession> {
  const provider = resolvePaymentProvider();

  // TODO(payments/yookassa): Call YooKassa Payments API (create payment) with
  //   shopId = process.env.YOOKASSA_SHOP_ID
  //   secretKey = process.env.YOOKASSA_SECRET_KEY
  //   return_url = process.env.NEXT_PUBLIC_SITE_URL + "/checkout/success"
  //   and redirect the buyer to confirmation.confirmation_url.

  // TODO(payments/stripe): Create a Stripe Checkout Session with
  //   secretKey = process.env.STRIPE_SECRET_KEY
  //   success_url / cancel_url from NEXT_PUBLIC_SITE_URL
  //   and redirect to session.url.

  void intent;

  return {
    provider,
    sessionId: `stub_${provider}_${Date.now()}`,
    status: "stub",
    checkoutUrl: null,
  };
}

export function isPaymentsConfigured(): boolean {
  // TODO(payments): Return true only when the active provider has real secrets.
  // Never treat placeholder env values as live credentials.
  return false;
}
