<script setup lang="ts">
// @webstack:layout-imports
</script>

<template>
  <div class="layout-default">
    <div class="layout-default__topbar">
      <!-- @webstack:layout-top-bar -->
    </div>

    <div class="layout-default__content">
      <RouterView />
    </div>

    <div class="layout-default__glow layout-default__glow--left" />
    <div class="layout-default__glow layout-default__glow--right" />
  </div>
</template>

<style scoped>
.layout-default {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  flex-direction: column;
  background-color: var(--color-background, #050a14);
  position: relative;
}

.layout-default__topbar {
  position: absolute;
  top: 1rem;
  padding-top: 1rem;
  right: 1.5rem;
  z-index: 50;
}

.layout-default__content {
  flex: 1 1 0%;
  z-index: 20;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  height: 100%;
  padding: 1.25rem;
}

.layout-default__glow {
  position: absolute;
  z-index: 10;
  pointer-events: none;
  background-color: var(--color-glow, rgba(124, 58, 237, 0.1));
  border-radius: 9999px;
}

.layout-default__glow--left {
  bottom: 2.5rem;
  left: -5rem;
  width: 16rem;
  height: 16rem;
  filter: blur(100px);
}

.layout-default__glow--right {
  bottom: 5rem;
  right: -5rem;
  width: 20rem;
  height: 20rem;
  filter: blur(80px);
}
</style>
