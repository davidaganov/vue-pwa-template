# Vue PWA Template

Vue 3 + Vite **PWA** template: offline-ready service worker flow, TypeScript, Tailwind CSS, and optional Pinia, vue-i18n, and Vitest—composed via `.webstack` when you use the official generator.

**Repository:** [github.com/davidaganov/vue-pwa-template](https://github.com/davidaganov/vue-pwa-template)
**Catalog starters:** [github.com/davidaganov/stack](https://aganov.dev/en/docs/guides/starters)

## Recommended setup

Use **[@davidaganov/stack](https://www.npmjs.com/package/@davidaganov/stack)**:

```bash
npx @davidaganov/stack
```

Pick **Vue PWA Template**, then:

| Mode            | What you get                                                                      |
| --------------- | --------------------------------------------------------------------------------- |
| **Empty**       | Minimal app from `.webstack/template-empty`.                                      |
| **Recommended** | Demo pages plus **Pinia**, **i18n** (vue-i18n + Polyglot Keeper), and **Vitest**. |
| **Custom**      | Demo pages; toggle **Pinia**, **i18n**, and **Unit tests** independently.         |

---

## Manual setup

1. `git clone https://github.com/davidaganov/vue-pwa-template.git`
2. `cd vue-pwa-template`
3. `npm install`
4. `npm run dev`
5. `npm run build` for production assets.

---

## Prerequisites

- **Node.js** v18+.

---

## Internationalization

Locale JSON under `src/i18n/locales/`. Typical usage:

```typescript
import { useI18n } from "vue-i18n"

const { t } = useI18n()
t("home.hero.title")
```

`npm run translate` runs [Polyglot Keeper](https://aganov.dev/en/docs/about/projects/polyglot-keeper) sync when the **i18n** layer is present.

---

## Features

- Vite + Vue 3.
- PWA shell (service worker, update strategy as configured in the template).
- Tailwind CSS.
- Optional Pinia, vue-i18n + typed locale files, Vitest + Vue Test Utils.

---

## Testing

```bash
npm test
npm run test:coverage
npm run lint
```

Vitest is only present when the **tests** module was selected in the wizard (or when working from the full reference checkout).

---

## Layout

- `src/` — Components, views, stores, router.
- `public/` — Static assets and PWA icons.
- `src/types/` — Shared TypeScript surface where applicable.

---

## License

MIT © [David Aganov](https://aganov.dev/en)
