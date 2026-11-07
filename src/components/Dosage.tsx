import { PRODUCT } from "@/data/flavors";

export function Dosage() {
  const dots = Array.from(
    { length: PRODUCT.strengthTotal },
    (_, i) => i < PRODUCT.strengthFilled,
  );

  return (
    <section
      id="dosage"
      className="border-t border-calyx-line bg-calyx-forest-deep text-white"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:py-28">
        <div className="lg:col-span-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
            Крепость · дозировка
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            10&nbsp;мг D9 на стрип · 30 стрипов
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
            Одна понятная единица. На пауче — красный блок дозировки и шкала
            крепости. Продукт только для лиц старше {PRODUCT.ageMin} лет.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="flex flex-wrap items-end gap-6">
            <div className="bg-calyx-dose px-5 py-4">
              <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {PRODUCT.doseMg}mg D9
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
                на стрип
              </p>
            </div>

            <div>
              <div
                className="flex gap-2"
                aria-label={`Крепость ${PRODUCT.strengthFilled} из ${PRODUCT.strengthTotal}`}
              >
                {dots.map((filled, i) => (
                  <span
                    key={i}
                    className={`size-4 rounded-full border-2 border-calyx-dose ${
                      filled ? "bg-calyx-dose" : "bg-transparent"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-sm">
                <span className="font-semibold">крепость</span>{" "}
                <span className="text-white/70">{PRODUCT.strengthLabel}</span>
              </p>
            </div>

            <div className="flex size-14 items-center justify-center rounded-full border-2 border-white/40 text-sm font-bold">
              {PRODUCT.ageMin}+
            </div>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.14em] text-white/45">
            Warning: keep out of reach of children and animals
          </p>
        </div>
      </div>
    </section>
  );
}
