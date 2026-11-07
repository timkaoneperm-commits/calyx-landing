import Image from "next/image";
import Link from "next/link";
import { FLAVORS, PRODUCT } from "@/data/flavors";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden calyx-atmosphere">
      <div className="absolute inset-0 calyx-diagonal opacity-[0.045]" aria-hidden />

      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl grid-cols-1 items-end gap-8 px-5 pb-10 pt-28 sm:px-8 lg:grid-cols-12 lg:items-center lg:pb-16 lg:pt-24">
        <div className="lg:col-span-5 lg:pb-8">
          <p
            className="animate-calyx-rise text-[11px] font-semibold uppercase tracking-[0.28em] text-calyx-muted"
            style={{ animationDelay: "80ms" }}
          >
            {PRODUCT.format}
          </p>

          <h1
            className="animate-calyx-rise mt-4 font-display text-[clamp(3.4rem,11vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.03em] text-calyx-ink"
            style={{ animationDelay: "160ms" }}
          >
            {PRODUCT.brand}
          </h1>

          <p
            className="animate-calyx-rise mt-2 font-display text-sm font-semibold uppercase tracking-[0.32em] text-calyx-forest"
            style={{ animationDelay: "220ms" }}
          >
            {PRODUCT.category}
          </p>

          <p
            className="animate-calyx-rise mt-6 max-w-sm text-base leading-relaxed text-calyx-muted sm:text-lg"
            style={{ animationDelay: "280ms" }}
          >
            Delta-9 — {PRODUCT.tagline}. Точная доза в оральном стрипе.
          </p>

          <div
            className="animate-calyx-rise mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <Link
              href="/checkout"
              className="bg-calyx-ink px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-calyx-forest"
            >
              Выбрать вкус
            </Link>
            <a
              href="#idea"
              className="border border-calyx-ink/20 px-6 py-3.5 text-sm font-medium text-calyx-ink transition hover:border-calyx-ink"
            >
              Как это работает
            </a>
          </div>

          <ul
            className="animate-calyx-rise mt-10 flex flex-wrap gap-x-5 gap-y-2"
            style={{ animationDelay: "440ms" }}
            aria-label="Линейка вкусов"
          >
            {FLAVORS.map((flavor) => (
              <li
                key={flavor.id}
                className="flex items-center gap-2 text-sm text-calyx-ink"
              >
                <span
                  className="inline-block size-2.5 shrink-0"
                  style={{ backgroundColor: flavor.accent }}
                  aria-hidden
                />
                {flavor.name}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="animate-calyx-scale relative lg:col-span-7"
          style={{ animationDelay: "200ms" }}
        >
          <div className="relative -mx-5 aspect-[4/5] max-h-[70svh] w-[calc(100%+2.5rem)] sm:mx-0 sm:aspect-[5/4] sm:max-h-none sm:w-full lg:aspect-[4/3]">
            <Image
              src="/calyx-pouch.jpg"
              alt="Белый пауч CALYX Delta-9 THC strips, 10mg D9"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[center_35%] sm:object-contain sm:object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
