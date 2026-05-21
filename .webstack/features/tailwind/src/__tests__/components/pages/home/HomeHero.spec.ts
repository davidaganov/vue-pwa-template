import { describe, expect, it } from "vitest"
import HomeHero from "@/components/pages/home/HomeHero.vue"
import { mountWithPlugins } from "@/__tests__/utils"

describe("HomeHero", () => {
  it("renders badge with version", () => {
    const wrapper = mountWithPlugins(HomeHero)
    expect(wrapper.text()).toContain("Template v1.0.0")
  })

  it("renders hero title", () => {
    const wrapper = mountWithPlugins(HomeHero)
    expect(wrapper.text()).toContain("Vue PWA")
  })

  it("renders hero subtitle", () => {
    const wrapper = mountWithPlugins(HomeHero)
    expect(wrapper.text()).toContain("Starter Template")
  })

  it("renders hero description", () => {
    const wrapper = mountWithPlugins(HomeHero)
    expect(wrapper.text()).toContain(
      "A modern Vue 3 PWA template with offline support, auto-updates, and touch-optimized interface."
    )
  })
})
