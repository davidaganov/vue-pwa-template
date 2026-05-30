<script setup lang="ts">
import { computed } from "vue"
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

const isDisabled = computed(() => props.disabled || props.loading)

const buttonClasses = computed(() => [
  "ui-button",
  `ui-button--${props.type}`,
  { "ui-button--disabled": isDisabled.value }
])

const onClick = (event: MouseEvent) => {
  if (isDisabled.value) {
    event.preventDefault()
    return
  }
  emit("click", event)
}
</script>

<template>
  <RouterLink
    v-if="to"
    :to="to"
    :class="buttonClasses"
    :aria-disabled="isDisabled || undefined"
    :tabindex="isDisabled ? -1 : undefined"
    @click="onClick"
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
  </RouterLink>

  <button
    v-else
    type="button"
    :class="buttonClasses"
    :disabled="isDisabled"
    @click="onClick"
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.625rem 1.25rem;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.ui-button:hover {
  filter: brightness(1.1);
}

.ui-button--primary {
  background-color: var(--color-primary, #8b5cf6);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}

.ui-button--secondary {
  background-color: var(--color-secondary, #1f2937);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.ui-button--outline {
  border: 1px solid rgba(139, 92, 246, 0.5);
  background-color: rgba(139, 92, 246, 0.05);
}

.ui-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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
