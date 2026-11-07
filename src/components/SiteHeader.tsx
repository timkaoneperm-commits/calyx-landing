import Link from "next/link";
import { PRODUCT } from "@/data/flavors";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-[0.18em] text-calyx-ink"
          aria-label="CALYX — на главную"
        >
          {PRODUCT.brand}
        </Link>
        <nav className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.16em] text-calyx-muted">
          <a href="/#flavors" className="transition hover:text-calyx-ink">
            Вкусы
          </a>
          <a
            href="/#dosage"
            className="hidden transition hover:text-calyx-ink sm:inline"
          >
            Дозировка
          </a>
          <Link
            href="/checkout"
            className="bg-calyx-ink px-3.5 py-2 text-white transition hover:bg-calyx-forest"
          >
            Заказать
          </Link>
        </nav>
      </div>
    </header>
  );
}
