import { Suspense } from "react";
import Link from "next/link";
import { CheckoutForm } from "@/components/CheckoutForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { FLAVORS } from "@/data/flavors";
import { isPaymentsConfigured, resolvePaymentProvider } from "@/lib/payments";

type CheckoutInnerProps = {
  searchParams: Promise<{ flavor?: string }>;
};

async function CheckoutInner({ searchParams }: CheckoutInnerProps) {
  const params = await searchParams;
  const flavorId =
    FLAVORS.find((f) => f.id === params.flavor)?.id ?? FLAVORS[0].id;
  const provider = resolvePaymentProvider();
  const configured = isPaymentsConfigured();

  return (
    <>
      <div className="mt-6 border border-dashed border-calyx-forest/40 bg-calyx-white/80 px-4 py-3 text-sm text-calyx-muted">
        Провайдер по умолчанию:{" "}
        <span className="font-semibold text-calyx-ink">
          {provider === "yookassa" ? "ЮKassa" : "Stripe"}
        </span>
        {" · "}
        статус:{" "}
        <span className="font-semibold text-calyx-dose">
          {configured ? "configured" : "не подключено (stub)"}
        </span>
      </div>

      <CheckoutForm initialFlavorId={flavorId} />
    </>
  );
}

type CheckoutPageProps = {
  searchParams: Promise<{ flavor?: string }>;
};

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 calyx-atmosphere pt-24">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-calyx-forest">
            Корзина · checkout stub
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-calyx-ink">
            Оформление заказа
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-calyx-muted">
            Маршрут готов к подключению оплаты. Сейчас это заготовка: платежи
            не обрабатываются, ключи не используются.
          </p>

          <Suspense
            fallback={
              <div className="mt-10 border border-calyx-line bg-calyx-white p-8 text-sm text-calyx-muted">
                Загрузка корзины…
              </div>
            }
          >
            <CheckoutInner searchParams={searchParams} />
          </Suspense>

          <p className="mt-8 text-sm text-calyx-muted">
            <Link
              href="/#flavors"
              className="font-medium text-calyx-ink underline-offset-4 hover:underline"
            >
              ← Вернуться к вкусам
            </Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
