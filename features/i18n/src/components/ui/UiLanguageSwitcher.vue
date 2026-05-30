<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import { type Locale, LOCALES } from "@/types"

const { locale } = useI18n()

const availableLocales = computed(() => Object.values(LOCALES))

const switchLocale = (newLocale: Locale) => {
  locale.value = newLocale
}
</script>

<template>
  <div
    class="flex flex-row items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md"
  >
    <button
      v-for="l in availableLocales"
      class="px-3 py-1 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer"
      :key="l"
      :class="[
        {
          'bg-transparent border border-transparent opacity-60 hover:opacity-100': locale !== l,
          'bg-primary/20 border border-primary/30': locale === l
        }
      ]"
      @click="switchLocale(l)"
    >
      <span
        class="text-xs font-bold tracking-wider"
        :class="locale === l ? 'text-primary' : 'text-gray-400'"
      >
        {{ l }}
      </span>
    </button>
  </div>
</template>
