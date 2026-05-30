<script setup lang="ts">
// @webstack:hero-imports
// @webstack:hero-store-init

// @webstack:hero-version
const appVersion = "1.0.0"
</script>

<template>
  <div class="home-hero">
    <span class="home-hero__badge">
      <!-- @webstack:hero-badge -->
      Template v{{ appVersion }}
    </span>

    <div class="home-hero__header">
      <h1 class="home-hero__title">
        <!-- @webstack:hero-title -->
        Vue PWA
      </h1>
      <h2 class="home-hero__subtitle">
        <!-- @webstack:hero-subtitle -->
        Starter Template
      </h2>
    </div>

    <p class="home-hero__description">
      <!-- @webstack:hero-description -->
      A modern Vue 3 PWA template with offline support, auto-updates, and touch-optimized interface.
    </p>
  </div>
</template>

<style scoped>
.home-hero {
  text-align: center;
}

.home-hero__badge {
  font-size: 0.75rem;
  margin-bottom: 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(139, 92, 246, 0.1);
  padding: 0.25rem 1rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
  font-weight: 700;
  color: var(--color-primary, #8b5cf6);
  letter-spacing: 0.1em;
}

.home-hero__header {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  letter-spacing: -0.05em;
  justify-content: center;
  align-items: center;
}

.home-hero__title {
  color: white;
  line-height: 1.1;
  font-size: 2.25rem;
}

.home-hero__subtitle {
  color: var(--color-primary, #8b5cf6);
  line-height: 1.1;
  font-size: 2.25rem;
}

@media (min-width: 768px) {
  .home-hero__title,
  .home-hero__subtitle {
    font-size: 3.75rem;
  }
}

.home-hero__description {
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  color: #9ca3af;
  max-width: 65%;
  line-height: 1.625;
  font-size: 1.125rem;
}

@media (min-width: 768px) {
  .home-hero__description {
    font-size: 1.25rem;
  }
}
</style>
