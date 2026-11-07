import Link from "next/link";
import { PRODUCT } from "@/data/flavors";

export function SiteFooter() {
  return (
    <footer className="border-t border-calyx-line bg-calyx-paper/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.2em] text-calyx-ink">
            {PRODUCT.brand}
          </p>
          <p className="mt-1 text-xs text-calyx-muted">
            Delta-9 THC strips · {PRODUCT.ageMin}+ · храните недоступно для
            детей
          </p>
        </div>
        <Link
          href="/checkout"
          className="text-xs font-semibold uppercase tracking-[0.16em] text-calyx-muted transition hover:text-calyx-ink"
        >
          Checkout stub
        </Link>
      </div>
    </footer>
  );
}
