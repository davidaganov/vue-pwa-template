<script setup lang="ts">
import { ROUTE_NAME } from "@/types"
import AboutInfo from "@/components/pages/about/AboutInfo.vue"
import UiButton from "@/components/ui/UiButton.vue"
</script>

<template>
  <div class="about-page">
    <h1 class="about-page__title">
      <!-- @webstack:about-title -->
      About
    </h1>

    <p class="about-page__description">
      <!-- @webstack:about-description -->
      This template is a starting point for your Vue 3 PWA project.
    </p>

    <AboutInfo />

    <UiButton
      type="outline"
      class="about-page__btn"
      :to="{ name: ROUTE_NAME.HOME }"
    >
      <!-- @webstack:about-return-button -->
      ← Return
    </UiButton>
  </div>
</template>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
}

.about-page__title {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  letter-spacing: -0.05em;
  margin-bottom: 1rem;
}

.about-page__description {
  max-width: 32rem;
  color: #9ca3af;
  font-size: 1.125rem;
  line-height: 1.625;
  margin-bottom: 2rem;
}

.about-page__btn {
  margin-top: 2rem;
  max-width: 20rem;
}
</style>
