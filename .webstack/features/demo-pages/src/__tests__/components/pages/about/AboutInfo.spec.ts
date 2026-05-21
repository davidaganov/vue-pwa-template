import { describe, expect, it } from "vitest"
import AboutInfo from "@/components/pages/about/AboutInfo.vue"
import { mountWithPlugins } from "@/__tests__/utils"

describe("AboutInfo", () => {
  it("renders feature items", () => {
    const wrapper = mountWithPlugins(AboutInfo)
    expect(wrapper.text()).toContain("PWA Support")
    expect(wrapper.text()).toContain("Offline Mode")
    expect(wrapper.text()).toContain("Tailwind CSS")
    expect(wrapper.text()).toContain("Vue Router")
  })

  it("renders correct number of feature cells", () => {
    const wrapper = mountWithPlugins(AboutInfo)
    const bem = wrapper.findAll(".about-info__item")
    const tw = wrapper.findAll(".grid > div")
    expect(bem.length === 4 || tw.length === 4).toBe(true)
  })

  it("renders feature icons", () => {
    const wrapper = mountWithPlugins(AboutInfo)
    const text = wrapper.text()
    expect(text).toContain("📱")
    expect(text).toContain("⚡")
    expect(text).toContain("🎨")
    expect(text).toContain("🛣️")
  })
})
