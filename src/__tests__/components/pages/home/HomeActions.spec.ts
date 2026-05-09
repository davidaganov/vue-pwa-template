import { describe, expect, it, vi } from "vitest"
import HomeActions from "@/components/pages/home/HomeActions.vue"
import { mountWithPlugins } from "@/__tests__/utils"

describe("HomeActions", () => {
  it("renders get started button", () => {
    const wrapper = mountWithPlugins(HomeActions)
    expect(wrapper.text()).toContain("Get Started")
  })

  it("renders read more button", () => {
    const wrapper = mountWithPlugins(HomeActions)
    expect(wrapper.text()).toContain("Read More")
  })

  it("renders two UiButton components", () => {
    const wrapper = mountWithPlugins(HomeActions)
    const buttons = wrapper.findAllComponents({ name: "UiButton" })
    expect(buttons).toHaveLength(2)
  })

  it("has read more button as link", () => {
    const wrapper = mountWithPlugins(HomeActions)
    const buttons = wrapper.findAllComponents({ name: "UiButton" })
    expect(buttons[1].props("to")).toEqual({ name: "about" })
  })

  it("calls handleGetStarted when primary button is clicked", async () => {
    const consoleSpy = vi.spyOn(console, "log")
    const wrapper = mountWithPlugins(HomeActions)
    const primaryButton = wrapper.findAllComponents({ name: "UiButton" })[0]
    await (primaryButton.vm as any).$emit("click")
    expect(consoleSpy).toHaveBeenCalledWith("Get Started")
    consoleSpy.mockRestore()
  })

  it("has responsive layout classes", () => {
    const wrapper = mountWithPlugins(HomeActions)
    const root = wrapper.find("div")
    const cls = root.classes().join(" ")
    expect(cls).toContain("flex-col")
    expect(cls).toContain("md:flex-row")
  })
})
