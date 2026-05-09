import { describe, expect, it } from "vitest"
import HomePage from "@/components/pages/home/HomePage.vue"
import { mountWithPlugins } from "@/__tests__/utils"

describe("HomePage", () => {
  it("renders HomeHero and HomeActions", () => {
    const wrapper = mountWithPlugins(HomePage)

    expect(wrapper.findComponent({ name: "HomeHero" }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: "HomeActions" }).exists()).toBe(true)
  })

  it("has centered layout classes", () => {
    const wrapper = mountWithPlugins(HomePage)
    const root = wrapper.find("div")
    const cls = root.classes().join(" ")

    expect(cls).toContain("flex-col")
    expect(cls).toContain("items-center")
    expect(cls).toContain("justify-center")
  })
})
