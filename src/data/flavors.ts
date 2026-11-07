/**
 * Flavor lineup — source of truth mirrored from Project docs/flavors.md.
 * Do not invent new display names; update from that doc when it changes.
 */

export type Flavor = {
  id: string;
  name: string;
  tagline: string;
  accent: string;
  packLine: string;
  blurb: string;
  /** Transparent pack cutout in /public */
  packImage: string;
};

export const FLAVORS: Flavor[] = [
  {
    id: "mint",
    name: "Холодная мята",
    tagline: "Чистая свежесть без дыма.",
    accent: "#5B8A7A",
    packLine: "10mg D9 per strip · 30 strips",
    packImage: "/calyx-pack-mint.png",
    blurb:
      "CALYX Холодная мята — оральные стрипы с лёгким мятным профилем для тех, кто выбирает точную дозировку без курения. Вкус спокойный и «клинически» чистый: свежесть ощущается, но не перебивает и не уходит в конфетность. Удобный формат на каждый день — 10 мг D9 на стрип, 30 стрипов в пауче.",
  },
  {
    id: "berries",
    name: "Лесные ягоды",
    tagline: "Ягодный профиль без сладости.",
    accent: "#8B3A4A",
    packLine: "10mg D9 per strip · 30 strips",
    packImage: "/calyx-pack-berry-v2.png",
    blurb:
      "CALYX Лесные ягоды — мягкий ягодный вкус в формате оральных стрипов Delta-9. Профиль взрослый и сдержанный: намёк на лесные ягоды без сиропа и без десертной тяжести. Тот же контролируемый опыт — 10 мг D9 на стрип, 30 стрипов — в пауче, который держит medical-retail линию бренда.",
  },
  {
    id: "chocolate",
    name: "Тёмный шоколад",
    tagline: "Глубина какао, без лишнего.",
    accent: "#6B4E3D",
    packLine: "10mg D9 per strip · 30 strips",
    packImage: "/calyx-pack-chocolate-v2.png",
    blurb:
      "CALYX Тёмный шоколад — оральные стрипы с глубоким какао-профилем для вечернего или «тишины» режима. Вкус взрослый, ближе к тёмному шоколаду, чем к молочному батончику: плотный, короткий, без сладости. Формула та же — 10 мг D9 на стрип, 30 стрипов — только другой характер на языке.",
  },
];

export const PRODUCT = {
  brand: "CALYX",
  category: "CANNABIS",
  format: "DELTA-9 THC STRIPS",
  tagline: "без курения",
  doseMg: 10,
  stripsPerPouch: 30,
  strengthLabel: "strong",
  strengthFilled: 3,
  strengthTotal: 4,
  ageMin: 21,
} as const;
