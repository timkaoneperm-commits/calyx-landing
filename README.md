# CALYX — лендинг

Современный русскоязычный лендинг бренда **CALYX** (Delta-9 THC oral strips, «без курения»).

## Стек

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4

## Запуск

```bash
cd ~/calyx-landing
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

Сборка:

```bash
npm run build
```

## Вкусы

1. **Холодная мята** (`#5B8A7A`)
2. **Лесные ягоды** (`#8B3A4A`)
3. **Тёмный шоколад** (`#6B4E3D`)

Данные: `src/data/flavors.ts` (зеркало `docs/flavors.md`).

## Оплата (stub)

- Checkout: `/checkout`
- Env: `.env.example`
- Логика: `src/lib/payments.ts`

**Live-платежи не подключены.** ЮKassa — основной провайдер для RU; Stripe — опционально.

## Возраст

Age gate 21+: `src/components/AgeGate.tsx`.
