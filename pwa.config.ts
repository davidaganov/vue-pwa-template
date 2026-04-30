import type { VitePWAOptions } from "vite-plugin-pwa"

// PWA Configuration Constants
const APP_NAME = "Vue PWA Template"
const APP_SHORT_NAME = "VuePWA"
const APP_DESCRIPTION = "A modern Vue 3 PWA template with offline support"
const THEME_COLOR = "#42b883"
const BACKGROUND_COLOR = "#ffffff"

// Cache Expiration Constants
const CACHE_ONE_YEAR = 60 * 60 * 24 * 365
const CACHE_FIVE_MINUTES = 60 * 5
const CACHE_TWENTY_FOUR_HOURS = 24 * 60

// Cache Limit Constants
const MAX_FONT_ENTRIES = 10
const MAX_API_ENTRIES = 100

/**
 * PWA Configuration for Vue PWA Template
 * Optimized for general use - works for web apps
 */
export const pwaConfig: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",

  workbox: {
    // Pre-cache all static assets
    globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],

    // Runtime caching strategies
    runtimeCaching: [
      {
        // Google Fonts stylesheets
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
        // Google Fonts files
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
      },
      {
        // API requests - Network first for fresh data
        urlPattern: /\/api\/.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "api-cache",
          expiration: {
            maxEntries: MAX_API_ENTRIES,
            maxAgeSeconds: CACHE_FIVE_MINUTES
          },
          cacheableResponse: {
            statuses: [0, 200]
          },
          backgroundSync: {
            name: "api-background-sync",
            options: {
              maxRetentionTime: CACHE_TWENTY_FOUR_HOURS
            }
          }
        }
      }
    ],

    // Clean up outdated caches
    cleanupOutdatedCaches: true,

    // Immediate activation of new Service Worker
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
