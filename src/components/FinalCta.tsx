import Link from "next/link";

export function FinalCta() {
  return (
    <section className="border-t border-calyx-line bg-calyx-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-28">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-calyx-forest">
            Готовы заказать
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-calyx-ink sm:text-4xl">
            Перейти к оформлению
          </h2>
          <p className="mt-4 text-base leading-relaxed text-calyx-muted">
            Корзина и checkout подготовлены под ЮKassa (или Stripe). Оплата
            пока не подключена — это заготовка маршрута, без реальных платежей.
          </p>
        </div>
        <Link
          href="/checkout"
          className="bg-calyx-ink px-8 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-calyx-forest"
        >
          Открыть checkout
        </Link>
      </div>
    </section>
  );
}
