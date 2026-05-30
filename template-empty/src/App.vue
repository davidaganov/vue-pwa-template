<template>
  <div class="app-shell">
    <h1 class="app-shell__title">Hello World</h1>
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  color: var(--color-text);
}

.app-shell__title {
  font-size: 1.875rem;
  font-weight: 700;
}
</style>
