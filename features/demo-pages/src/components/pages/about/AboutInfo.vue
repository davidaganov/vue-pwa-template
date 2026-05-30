<script setup lang="ts">
// @webstack:about-info-imports

const features = [
  // @webstack:about-features
  { title: "PWA Support", icon: "📱" },
  { title: "Offline Mode", icon: "⚡" },
  { title: "Tailwind CSS", icon: "🎨" },
  { title: "Vue Router", icon: "🛣️" }
]
</script>

<template>
  <div class="about-info">
    <div
      v-for="feature in features"
      class="about-info__item"
      :key="feature.title"
    >
      <span class="about-info__icon">{{ feature.icon }}</span>
      <span class="about-info__text">
        {{ feature.title }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.about-info {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  width: 100%;
  max-width: 28rem;
}

.about-info__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.about-info__icon {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.about-info__text {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #d1d5db;
}
</style>
