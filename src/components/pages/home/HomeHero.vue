<script setup lang="ts">
import { useAppStore } from "@/stores/app"

const appStore = useAppStore()
</script>

<template>
  <div>
    <span
      class="text-xs mb-6 inline-flex justify-center items-center rounded-full mx-auto bg-primary/10 px-4 py-1 border border-primary/20 font-bold text-primary tracking-widest"
    >
      {{ $t("home.badge", { version: appStore.version }) }}
    </span>

    <div class="mx-auto mb-3 flex flex-col font-bold tracking-tighter justify-center items-center">
      <h1 class="text-white leading-[1.1] text-4xl md:text-6xl">
        {{ $t("home.hero.title") }}
      </h1>
      <h2 class="text-primary leading-[1.1] text-4xl md:text-6xl">
        {{ $t("home.hero.subtitle") }}
      </h2>
    </div>

    <p class="mt-4 mx-auto text-gray-400 max-w-[65%] leading-relaxed text-lg md:text-xl">
      {{ $t("home.hero.description") }}
    </p>
  </div>
</template>
