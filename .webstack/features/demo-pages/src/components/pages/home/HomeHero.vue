<script setup lang="ts">
// @webstack:hero-imports
// @webstack:hero-store-init

// @webstack:hero-version
const appVersion = "1.0.0"
</script>

<template>
  <div>
    <span
      class="text-xs mb-6 inline-flex justify-center items-center rounded-full mx-auto bg-primary/10 px-4 py-1 border border-primary/20 font-bold text-primary tracking-widest"
    >
      <!-- @webstack:hero-badge -->
      Template v{{ appVersion }}
    </span>

    <div class="mx-auto mb-3 flex flex-col font-bold tracking-tighter justify-center items-center">
      <h1 class="text-white leading-[1.1] text-4xl md:text-6xl">
        <!-- @webstack:hero-title -->
        Vue PWA
      </h1>
      <h2 class="text-primary leading-[1.1] text-4xl md:text-6xl">
        <!-- @webstack:hero-subtitle -->
        Starter Template
      </h2>
    </div>

    <p class="mt-4 mx-auto text-gray-400 max-w-[65%] leading-relaxed text-lg md:text-xl">
      <!-- @webstack:hero-description -->
      A modern Vue 3 PWA template with offline support, auto-updates, and touch-optimized interface.
    </p>
  </div>
</template>
