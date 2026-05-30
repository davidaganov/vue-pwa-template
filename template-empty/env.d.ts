/// <reference types="vite/client" />

// Vite PWA virtual modules
declare module "virtual:pwa-register" {
  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: Error) => void
  }

  export function registerSW(options?: RegisterSWOptions): (reloadPage?: boolean) => Promise<void>
}

declare module "virtual:pwa-register/vue" {
  import type { Ref } from "vue"

  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    onRegisteredSW?: (swUrl: string, registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: Error) => void
    intervalSeconds?: number
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    offlineReady: Ref<boolean>
    needRefresh: Ref<boolean>
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}
