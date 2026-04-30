<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const features = [
  { title: t("about.features.pwa"), icon: "📱" },
  { title: t("about.features.offline"), icon: "⚡" },
  { title: t("about.features.i18n"), icon: "🌍" },
  { title: t("about.features.tailwind"), icon: "🎨" },
  { title: t("about.features.pinia"), icon: "📦" },
  { title: t("about.features.tests"), icon: "🧪" }
]
</script>

<template>
  <div class="grid grid-cols-2 gap-3 w-full max-w-md">
    <div
      v-for="feature in features"
      class="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
      :key="feature.title"
    >
      <span class="text-xl">{{ feature.icon }}</span>
      <span class="text-sm font-medium text-gray-300">
        {{ feature.title }}
      </span>
    </div>
  </div>
</template>
