<script setup lang="ts">
import { type RouteLocationRaw, RouterLink } from "vue-router"

const props = withDefaults(
  defineProps<{
    type?: "primary" | "secondary" | "outline"
    disabled?: boolean
    loading?: boolean
    to?: RouteLocationRaw
  }>(),
  {
    type: "primary",
    disabled: false,
    loading: false,
    to: undefined
  }
)

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void
}>()

const handleClick = (e: MouseEvent, navigate?: () => void) => {
  if (props.disabled || props.loading) return
  if (navigate) navigate()
  emit("click", e)
}
</script>

<template>
  <router-link
    v-if="to"
    v-slot="{ navigate }"
    custom
    :to="to"
  >
    <button
      class="ui-button"
      :class="[`ui-button--${type}`, { 'ui-button--disabled': disabled || loading }]"
      :disabled="disabled || loading"
      @click="handleClick($event, navigate)"
    >
      <span
        v-if="!loading"
        class="ui-button__text"
      >
        <slot />
      </span>
      <span
        v-else
        class="ui-button__text ui-button__text--loading"
      >
        Loading...
      </span>
    </button>
  </router-link>

  <button
    v-else
    class="ui-button"
    :class="[`ui-button--${type}`, { 'ui-button--disabled': disabled || loading }]"
    :disabled="disabled || loading"
    @click="handleClick($event)"
  >
    <span
      v-if="!loading"
      class="ui-button__text"
    >
      <slot />
    </span>
    <span
      v-else
      class="ui-button__text ui-button__text--loading"
    >
      Loading...
    </span>
  </button>
</template>

<style scoped>
.ui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.625rem 1.25rem;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
}

.ui-button:hover {
  filter: brightness(1.1);
}

.ui-button--primary {
  background-color: var(--color-primary, #8b5cf6);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}

.ui-button--secondary {
  background-color: var(--color-secondary, #1e293b);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.ui-button--outline {
  border: 1px solid rgba(139, 92, 246, 0.5);
  background-color: rgba(139, 92, 246, 0.05);
}

.ui-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ui-button__text {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  color: white;
}

.ui-button--outline .ui-button__text {
  color: var(--color-primary, #8b5cf6);
}

.ui-button__text--loading {
  opacity: 0.7;
}
</style>
