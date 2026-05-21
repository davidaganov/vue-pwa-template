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

  it("renders correct number of features", () => {
    const wrapper = mountWithPlugins(AboutInfo)
    const items = wrapper.findAll(".grid > div")
    expect(items).toHaveLength(4)
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
