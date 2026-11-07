"use client";

import { useMemo, useState, useTransition } from "react";
import { FLAVORS } from "@/data/flavors";
import {
  createPaymentSession,
  resolvePaymentProvider,
  type CheckoutIntent,
} from "@/lib/payments";

type CheckoutFormProps = {
  initialFlavorId: string;
};

export function CheckoutForm({ initialFlavorId }: CheckoutFormProps) {
  const [flavorId, setFlavorId] = useState(initialFlavorId);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const flavor = useMemo(
    () => FLAVORS.find((f) => f.id === flavorId) ?? FLAVORS[0],
    [flavorId],
  );

  const providerLabel =
    resolvePaymentProvider() === "yookassa" ? "ЮKassa" : "Stripe";

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    startTransition(async () => {
      const intent: CheckoutIntent = {
        flavorId: flavor.id,
        quantity,
        currency: "RUB",
      };

      // Stub only — createPaymentSession does not call a real API.
      const session = await createPaymentSession(intent);

      setMessage(
        `Заглушка: сессия ${session.sessionId} (${session.provider}). ` +
          "Реальная оплата не запущена. Подключите ключи в .env.local и реализуйте TODO в src/lib/payments.ts.",
      );
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-10 space-y-8 border border-calyx-line bg-calyx-white p-6 sm:p-8"
    >
      <fieldset>
        <legend className="font-display text-lg font-semibold text-calyx-ink">
          Вкус
        </legend>
        <div className="mt-4 space-y-3">
          {FLAVORS.map((item) => (
            <label
              key={item.id}
              className="flex cursor-pointer items-start gap-3 border border-transparent px-3 py-3 transition hover:border-calyx-line has-[:checked]:border-calyx-ink"
            >
              <input
                type="radio"
                name="flavor"
                value={item.id}
                checked={flavorId === item.id}
                onChange={() => setFlavorId(item.id)}
                className="mt-1 accent-calyx-forest"
              />
              <span className="flex-1">
                <span className="flex items-center gap-2 font-medium text-calyx-ink">
                  <span
                    className="inline-block size-2.5"
                    style={{ backgroundColor: item.accent }}
                    aria-hidden
                  />
                  {item.name}
                </span>
                <span className="mt-1 block text-sm text-calyx-muted">
                  {item.tagline}
                </span>
                <span className="mt-1 block text-[11px] uppercase tracking-[0.12em] text-calyx-ink/50">
                  {item.packLine}
                </span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="qty"
          className="font-display text-lg font-semibold text-calyx-ink"
        >
          Количество паучей
        </label>
        <input
          id="qty"
          type="number"
          min={1}
          max={10}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value) || 1)}
          className="mt-3 w-28 border border-calyx-line bg-calyx-white px-3 py-2 text-calyx-ink outline-none focus:border-calyx-forest"
        />
      </div>

      <div className="border-t border-calyx-line pt-6">
        <p className="text-sm text-calyx-muted">
          Итого (черновик):{" "}
          <span className="font-semibold text-calyx-ink">
            {flavor.name} × {quantity}
          </span>
        </p>
        <p className="mt-1 text-xs text-calyx-muted">
          Цена и списание появятся после интеграции {providerLabel}.
        </p>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-calyx-ink px-6 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-calyx-forest disabled:opacity-60 sm:w-auto"
      >
        {pending
          ? "Создаём stub-сессию…"
          : `Оплатить через ${providerLabel} (stub)`}
      </button>

      {message ? (
        <p
          role="status"
          className="border border-calyx-dose/30 bg-calyx-dose/5 px-4 py-3 text-sm leading-relaxed text-calyx-ink"
        >
          {message}
        </p>
      ) : null}

      <p className="text-xs leading-relaxed text-calyx-muted">
        {/* TODO(payments): Replace stub button with redirect to ЮKassa confirmation_url
            or Stripe Checkout session.url once env secrets are present. */}
        21+ · Delta-9 THC · это демо-форма без реальных платежей.
      </p>
    </form>
  );
}
