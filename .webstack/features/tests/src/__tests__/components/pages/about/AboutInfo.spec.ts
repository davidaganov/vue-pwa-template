import { describe, expect, it } from "vitest"
import AboutInfo from "@/components/pages/about/AboutInfo.vue"
import { mountWithPlugins } from "@/__tests__/utils"

describe("AboutInfo", () => {
  it("renders feature items", () => {
    const wrapper = mountWithPlugins(AboutInfo)
    expect(wrapper.text()).toContain("i18n Support")
    expect(wrapper.text()).toContain("Tailwind CSS")
    expect(wrapper.text()).toContain("PWA Support")
    expect(wrapper.text()).toContain("Unit Tests")
    expect(wrapper.text()).toContain("Pinia Support")
    expect(wrapper.text()).toContain("Offline Mode")
  })

  it("renders correct number of features", () => {
    const wrapper = mountWithPlugins(AboutInfo)
    const items = wrapper.findAll(".grid > div") // v-for items
    expect(items).toHaveLength(6)
  })

  it("renders feature icons", () => {
    const wrapper = mountWithPlugins(AboutInfo)
    const text = wrapper.text()
    // Check for emoji icons
    expect(text).toContain("📱") // PWA
    expect(text).toContain("⚡") // Offline
    expect(text).toContain("🌍") // i18n
    expect(text).toContain("🎨") // Tailwind
    expect(text).toContain("📦") // Pinia
    expect(text).toContain("🧪") // Tests
  })
})
