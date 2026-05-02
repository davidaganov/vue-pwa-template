import { describe, it, expect } from "vitest"
import AboutPage from "@/components/pages/about/AboutPage.vue"
import AboutInfo from "@/components/pages/about/AboutInfo.vue"
import { mountWithPlugins } from "@/__tests__/utils"

describe("AboutPage", () => {
  it("renders about title", () => {
    const wrapper = mountWithPlugins(AboutPage)
    expect(wrapper.text()).toContain("About")
  })

  it("renders about description", () => {
    const wrapper = mountWithPlugins(AboutPage)
    expect(wrapper.text()).toContain(
      "This template is a starting point for your Vue 3 PWA project."
    )
  })

  it("renders AboutInfo component", () => {
    const wrapper = mountWithPlugins(AboutPage)
    expect(wrapper.findComponent(AboutInfo).exists()).toBe(true)
  })

  it("renders return button", () => {
    const wrapper = mountWithPlugins(AboutPage)
    expect(wrapper.text()).toContain("Return")
  })

  it("has return button as link to home", () => {
    const wrapper = mountWithPlugins(AboutPage)
    const button = wrapper.findComponent({ name: "UiButton" })
    expect(button.props("to")).toEqual({ name: "home" })
  })
})
