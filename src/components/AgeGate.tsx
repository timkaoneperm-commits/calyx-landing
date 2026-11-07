"use client";

import { useEffect, useState } from "react";
import { PRODUCT } from "@/data/flavors";

const STORAGE_KEY = "calyx_age_verified_21";

export function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const ok = window.localStorage.getItem(STORAGE_KEY) === "1";
      setOpen(!ok);
    } catch {
      setOpen(true);
    }
  }, []);

  function confirm() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  function deny() {
    window.location.href = "https://www.google.com";
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-calyx-ink/70 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="w-full max-w-md border border-calyx-line bg-calyx-white p-7 text-calyx-ink shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-9">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-calyx-forest">
          {PRODUCT.ageMin}+ · только для взрослых
        </p>
        <h2
          id="age-gate-title"
          className="mt-3 font-display text-3xl font-semibold tracking-tight"
        >
          Вам уже есть {PRODUCT.ageMin}?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-calyx-muted">
          CALYX — продукт с Delta-9 THC. Доступ только с {PRODUCT.ageMin} лет.
          Храните в недоступном для детей и животных месте.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={confirm}
            className="flex-1 bg-calyx-ink px-5 py-3.5 text-sm font-semibold tracking-wide text-white transition hover:bg-calyx-forest"
          >
            Да, мне есть {PRODUCT.ageMin}
          </button>
          <button
            type="button"
            onClick={deny}
            className="flex-1 border border-calyx-ink/20 px-5 py-3.5 text-sm font-medium text-calyx-muted transition hover:border-calyx-ink hover:text-calyx-ink"
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}
