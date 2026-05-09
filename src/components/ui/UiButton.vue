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

const buttonClasses = computed(() => [
  {
    "bg-primary shadow-[0_0_20px_rgba(139,92,246,0.3)]": props.type === "primary",
    "bg-secondary border border-white/10": props.type === "secondary",
    "border border-primary/50 bg-primary/5": props.type === "outline",
    "opacity-50 cursor-not-allowed": props.disabled || props.loading
  }
])

const textClasses = computed(() => [
  {
    "text-white": props.type === "primary" || props.type === "secondary",
    "text-primary": props.type === "outline"
  }
])

const handleClick = (e: MouseEvent, navigate?: () => void) => {
  if (props.disabled || props.loading) return
  if (navigate) navigate()
  emit("click", e)
}
</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    custom
    v-slot="{ navigate }"
  >
    <button
      class="flex items-center justify-center w-full rounded-lg px-5 py-2.5 transition-all duration-300 cursor-pointer hover:brightness-110"
      :class="buttonClasses"
      :disabled="disabled || loading"
      @click="handleClick($event, navigate)"
    >
      <span
        v-if="!loading"
        class="text-sm font-medium tracking-wide"
        :class="textClasses"
      >
        <slot />
      </span>
      <span
        v-else
        class="text-sm font-medium text-white opacity-70"
      >
        Loading...
      </span>
    </button>
  </router-link>

  <button
    v-else
    class="flex items-center justify-center w-full rounded-lg px-5 py-2.5 transition-all duration-300 cursor-pointer hover:brightness-110"
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick($event)"
  >
    <span
      v-if="!loading"
      class="text-sm font-medium tracking-wide"
      :class="textClasses"
    >
      <slot />
    </span>
    <span
      v-else
      class="text-sm font-medium text-white opacity-70"
    >
      Loading...
    </span>
  </button>
</template>
