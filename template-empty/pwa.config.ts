import type { VitePWAOptions } from "vite-plugin-pwa"

const APP_NAME = "Vue PWA Template"
const APP_SHORT_NAME = "VuePWA"
const APP_DESCRIPTION = "A modern Vue 3 PWA template with offline support"
const THEME_COLOR = "#42b883"
const BACKGROUND_COLOR = "#ffffff"

const CACHE_ONE_YEAR = 60 * 60 * 24 * 365

const MAX_FONT_ENTRIES = 10

export const pwaConfig: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",

  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],

    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts-cache",
          expiration: {
            maxEntries: MAX_FONT_ENTRIES,
            maxAgeSeconds: CACHE_ONE_YEAR
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "gstatic-fonts-cache",
          expiration: {
            maxEntries: MAX_FONT_ENTRIES,
            maxAgeSeconds: CACHE_ONE_YEAR
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ],

    cleanupOutdatedCaches: true,
    skipWaiting: true,
    clientsClaim: true
  },

  manifest: {
    id: "/",
    name: APP_NAME,
    short_name: APP_SHORT_NAME,
    description: APP_DESCRIPTION,
    theme_color: THEME_COLOR,
    background_color: BACKGROUND_COLOR,
    display: "standalone",
    display_override: ["standalone", "fullscreen"],
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    categories: ["productivity", "utilities"]
  },

  injectRegister: "auto",
  manifestFilename: "manifest.json",
  devOptions: {
    enabled: false,
    type: "module"
  }
}
