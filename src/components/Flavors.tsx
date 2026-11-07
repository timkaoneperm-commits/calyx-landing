import Link from "next/link";
import { FLAVORS } from "@/data/flavors";

export function Flavors() {
  return (
    <section id="flavors" className="border-t border-calyx-line bg-calyx-paper/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-calyx-forest">
          Три вкуса · одна формула
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold tracking-tight text-calyx-ink sm:text-4xl">
          Выберите характер — доза та же
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-calyx-muted">
          Единый каркас бренда: CALYX, 10&nbsp;мг D9, крепость strong, 21+.
          Различаются имя вкуса и цветовой акцент на пауче.
        </p>

        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {FLAVORS.map((flavor, index) => (
            <li key={flavor.id} className="group">
              <div
                className="h-1.5 w-16 transition-all duration-500 group-hover:w-24"
                style={{ backgroundColor: flavor.accent }}
                aria-hidden
              />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-calyx-muted">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-calyx-ink">
                {flavor.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-calyx-ink/80">
                {flavor.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-calyx-muted">
                {flavor.blurb}
              </p>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-calyx-ink/55">
                {flavor.packLine}
              </p>
              <Link
                href={`/checkout?flavor=${flavor.id}`}
                className="mt-6 inline-flex text-sm font-semibold text-calyx-ink underline-offset-4 transition hover:text-calyx-forest hover:underline"
              >
                В корзину →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
