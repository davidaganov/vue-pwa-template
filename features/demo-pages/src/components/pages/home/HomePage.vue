<script setup lang="ts">
import HomeActions from "@/components/pages/home/HomeActions.vue"
import HomeHero from "@/components/pages/home/HomeHero.vue"
</script>

<template>
  <div class="home-page">
    <HomeHero />
    <HomeActions />
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-align: center;
}
</style>
