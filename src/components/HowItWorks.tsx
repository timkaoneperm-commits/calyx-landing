const STEPS = [
  {
    title: "Выберите вкус",
    body: "Холодная мята, Лесные ягоды или Тёмный шоколад — одна формула, разный характер на языке.",
  },
  {
    title: "Положите стрип",
    body: "Оральный формат: стрип растворяется без курения и без пара.",
  },
  {
    title: "Знай свою дозу",
    body: "Каждый стрип — 10 мг D9. Предсказуемо, без угадывания.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-calyx-line bg-calyx-white">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-calyx-forest">
          Как это работает
        </p>
        <h2 className="mt-4 max-w-lg font-display text-3xl font-semibold tracking-tight text-calyx-ink sm:text-4xl">
          Три шага до спокойного ритуала
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="font-display text-4xl font-bold tabular-nums text-calyx-forest/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-calyx-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-calyx-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
