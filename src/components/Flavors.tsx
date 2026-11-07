import Image from "next/image";
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
          Различаются имя вкуса, акцент на пауче и цветок рядом с упаковкой.
        </p>

        <ul className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8">
          {FLAVORS.map((flavor, index) => (
            <li key={flavor.id} className="group flex flex-col">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] transition duration-500 group-hover:-translate-y-1">
                <Image
                  src={flavor.packImage}
                  alt={`Пауч CALYX ${flavor.name}`}
                  fill
                  sizes="(max-width: 768px) 70vw, 280px"
                  className="object-contain object-bottom drop-shadow-[0_18px_32px_rgba(28,42,34,0.14)]"
                />
              </div>

              <div
                className="mt-8 h-1.5 w-16 transition-all duration-500 group-hover:w-24"
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
              <p className="mt-4 flex-1 text-sm leading-relaxed text-calyx-muted">
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
