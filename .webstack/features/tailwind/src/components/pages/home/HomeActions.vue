<script setup lang="ts">
import { ROUTE_NAME } from "@/types"
import UiButton from "@/components/ui/UiButton.vue"

const handleGetStarted = () => {
  console.log("Get Started")
}
</script>

<template>
  <div
    class="flex w-full gap-2 flex-col mt-8 max-w-[180px] md:gap-4 md:flex-row md:mt-12 md:max-w-[340px]"
  >
    <UiButton
      class="w-full"
      type="primary"
      @click="handleGetStarted"
    >
      <!-- @webstack:home-actions-get-started -->
      Get Started
    </UiButton>
    <UiButton
      class="w-full"
      type="outline"
      :to="{ name: ROUTE_NAME.ABOUT }"
    >
      <!-- @webstack:home-actions-read-more -->
      Read More
    </UiButton>
  </div>
</template>
