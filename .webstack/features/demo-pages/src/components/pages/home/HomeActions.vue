<script setup lang="ts">
import { ROUTE_NAME } from "@/types"
import UiButton from "@/components/ui/UiButton.vue"

const handleGetStarted = () => {
  console.log("Get Started")
}
</script>

<template>
  <div class="home-actions">
    <UiButton
      class="home-actions__btn"
      type="primary"
      @click="handleGetStarted"
    >
      <!-- @webstack:home-actions-get-started -->
      Get Started
    </UiButton>
    <UiButton
      class="home-actions__btn"
      type="outline"
      :to="{ name: ROUTE_NAME.ABOUT }"
    >
      <!-- @webstack:home-actions-read-more -->
      Read More
    </UiButton>
  </div>
</template>

<style scoped>
.home-actions {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
  max-width: 180px;
}

.home-actions__btn {
  width: 100%;
}

@media (min-width: 768px) {
  .home-actions {
    flex-direction: row;
    gap: 1rem;
    margin-top: 3rem;
    max-width: 340px;
  }
}
</style>
