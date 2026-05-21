<script setup lang="ts">
import { ROUTE_NAME } from "@/types"
import AboutInfo from "@/components/pages/about/AboutInfo.vue"
import UiButton from "@/components/ui/UiButton.vue"
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
    <h1 class="text-4xl font-bold text-white tracking-tighter mb-4">
      <!-- @webstack:about-title -->
      About
    </h1>

    <p class="max-w-lg text-gray-400 text-lg leading-relaxed mb-8">
      <!-- @webstack:about-description -->
      This template is a starting point for your Vue 3 PWA project.
    </p>

    <AboutInfo />

    <UiButton
      type="outline"
      class="mt-8 max-w-xs"
      :to="{ name: ROUTE_NAME.HOME }"
    >
      <!-- @webstack:about-return-button -->
      ← Return
    </UiButton>
  </div>
</template>
