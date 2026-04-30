# Vue PWA Template

A modern Vue 3 PWA template with offline support, auto-updates, and touch-optimized interface. Built with Vite, TypeScript, Pinia, and Tailwind CSS.

## Key Features

- **Vue 3 + Vite**: Lightning-fast development with HMR and highly optimized production builds.
- **PWA Ready**: Out-of-the-box offline support with Service Workers and auto-update logic.
- **Tailwind CSS**: Utility-first styling for rapid UI development and mobile optimization.
- **Routing**: Pre-configured `vue-router` with support for nested layouts and views.
- **State Management**: Integrated **Pinia** for scalable and reactive state handling.
- **i18n**: Custom lightweight localization system with full TypeScript type safety.
- **Unit Testing**: Robust testing environment powered by **Vitest** and **Vue Test Utils**.

## Prerequisites

- **Node.js** (v18 or higher)

## Quick Start

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Start development server**:
    ```bash
    npm run dev
    ```
3.  **Build for production**:
    ```bash
    npm run build
    ```

## Internationalization (i18n)

The project includes a type-safe localization system. The primary locale file is located at `src/i18n/locales/en.json`.

Usage in components:
```typescript
import { useI18n } from "@/i18n"
const { t } = useI18n()

t("home.hero.title")
```

## Testing

Testing is handled via Vitest.

- Run all tests: `npm test`
- Check coverage: `npm run test:coverage`
- Linting: `npm run lint`

## Project Structure

- `src/` — Vue 3 source code (components, views, stores).
- `public/` — Static assets and PWA manifest icons.
- `src/i18n/` — Localization logic and translation files.
- `src/types/` — Global TypeScript interfaces and enums.

## License

MIT © David Aganov
