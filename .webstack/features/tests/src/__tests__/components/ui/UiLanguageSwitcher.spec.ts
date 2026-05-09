import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import { createI18n } from "vue-i18n"
import enMessages from "@/i18n/locales/en.json"
import ruMessages from "@/i18n/locales/ru.json"
import { LOCALES } from "@/types"
import UiLanguageSwitcher from "@/components/ui/UiLanguageSwitcher.vue"

function createI18nPlugin(locale: LOCALES = LOCALES.EN) {
  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: LOCALES.EN,
    messages: {
      [LOCALES.EN]: enMessages,
      [LOCALES.RU]: ruMessages
    }
  })
}

describe("UiLanguageSwitcher", () => {
  it("renders available locales", () => {
    const wrapper = mount(UiLanguageSwitcher, {
      global: {
        plugins: [createI18nPlugin()]
      }
    })

    expect(wrapper.text()).toContain("en")
    expect(wrapper.text()).toContain("ru")
  })

  it("marks current locale as active", () => {
    const wrapper = mount(UiLanguageSwitcher, {
      global: {
        plugins: [createI18nPlugin(LOCALES.EN)]
      }
    })

    const buttons = wrapper.findAll("button")
    const activeButton = buttons.find((b) => b.classes().includes("bg-primary/20"))

    expect(activeButton?.text()).toBe("en")
  })

  it("switches locale on click", async () => {
    const i18n = createI18nPlugin(LOCALES.EN)
    const wrapper = mount(UiLanguageSwitcher, {
      global: {
        plugins: [i18n]
      }
    })

    const buttons = wrapper.findAll("button")
    const ruButton = buttons.find((b) => b.text() === "ru")

    await ruButton?.trigger("click")
    await wrapper.vm.$nextTick()

    expect(i18n.global.locale.value).toBe(LOCALES.RU)
  })

  it("has correct number of locale buttons", () => {
    const wrapper = mount(UiLanguageSwitcher, {
      global: {
        plugins: [createI18nPlugin()]
      }
    })

    const buttons = wrapper.findAll("button")
    expect(buttons).toHaveLength(2)
  })

  it("applies inactive styling to non-active locales", () => {
    const wrapper = mount(UiLanguageSwitcher, {
      global: {
        plugins: [createI18nPlugin(LOCALES.EN)]
      }
    })

    const buttons = wrapper.findAll("button")
    const inactiveButton = buttons.find((b) => b.text() === "ru")

    expect(inactiveButton?.classes()).toContain("opacity-60")
  })
})
