import { mount } from "@vue/test-utils"
import { describe, expect, it, vi } from "vitest"
import { createMemoryHistory, createRouter } from "vue-router"
import UiButton from "@/components/ui/UiButton.vue"

function createTestRouter() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: { template: "<div>home</div>" }
      },
      {
        path: "/about",
        name: "about",
        component: { template: "<div>about</div>" }
      }
    ]
  })
  router.push("/")
  return router
}

describe("UiButton", () => {
  it("renders default slot text", () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary" },
      slots: { default: "Click me" }
    })
    expect(wrapper.text()).toContain("Click me")
  })

  it("applies primary classes", () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary" },
      slots: { default: "Primary" }
    })
    const button = wrapper.find("button")
    const cls = button.classes().join(" ")
    expect(cls.includes("bg-primary") || cls.includes("ui-button--primary")).toBe(true)
  })

  it("applies secondary classes", () => {
    const wrapper = mount(UiButton, {
      props: { type: "secondary" },
      slots: { default: "Secondary" }
    })
    const button = wrapper.find("button")
    const cls = button.classes().join(" ")
    expect(cls.includes("bg-secondary") || cls.includes("ui-button--secondary")).toBe(true)
  })

  it("applies outline classes", () => {
    const wrapper = mount(UiButton, {
      props: { type: "outline" },
      slots: { default: "Outline" }
    })
    const button = wrapper.find("button")
    const cls = button.classes().join(" ")
    expect(cls.includes("border") || cls.includes("ui-button--outline")).toBe(true)
  })

  it("shows loading text instead of slot", () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary", loading: true },
      slots: { default: "Click me" }
    })
    expect(wrapper.text()).toContain("Loading...")
    expect(wrapper.text()).not.toContain("Click me")
  })

  it("applies loading classes when loading is true", () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary", loading: true }
    })
    const button = wrapper.find("button")
    const cls = button.classes().join(" ")
    expect(cls.includes("opacity-50") || cls.includes("ui-button--disabled")).toBe(true)
  })

  it("emits click on button click", async () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary" },
      slots: { default: "Click me" }
    })

    await wrapper.find("button").trigger("click")
    expect(wrapper.emitted("click")).toHaveLength(1)
  })

  it("does not emit click when disabled", async () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary", disabled: true },
      slots: { default: "Click me" }
    })

    await (wrapper.vm as any).handleClick(new MouseEvent("click"))
    expect(wrapper.emitted("click")).toBeUndefined()
  })

  it("does not emit click when loading", async () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary", loading: true },
      slots: { default: "Click me" }
    })

    await (wrapper.vm as any).handleClick(new MouseEvent("click"))
    expect(wrapper.emitted("click")).toBeUndefined()
  })

  it("is disabled when loading", () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary", loading: true }
    })
    const button = wrapper.find("button")
    expect(button.attributes("disabled")).toBeDefined()
  })

  it("is disabled when disabled prop is true", () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary", disabled: true }
    })
    const button = wrapper.find("button")
    expect(button.attributes("disabled")).toBeDefined()
  })

  it("renders as RouterLink when to prop provided", async () => {
    const router = createTestRouter()
    const wrapper = mount(UiButton, {
      global: {
        plugins: [router]
      },
      props: {
        type: "primary",
        to: { name: "about" }
      },
      slots: { default: "Navigate" }
    })

    expect(wrapper.findComponent({ name: "RouterLink" }).exists()).toBe(true)
  })

  it("renders as button when no to prop", () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary" },
      slots: { default: "No link" }
    })

    expect(wrapper.find("button").exists()).toBe(true)
    expect(wrapper.findComponent({ name: "RouterLink" }).exists()).toBe(false)
  })

  it("calls navigate when link button is clicked", async () => {
    const router = createTestRouter()
    const pushSpy = vi.spyOn(router, "push")
    const wrapper = mount(UiButton, {
      global: {
        plugins: [router]
      },
      props: {
        type: "primary",
        to: "/about"
      },
      slots: { default: "Navigate" }
    })

    await wrapper.find("button").trigger("click")
    expect(pushSpy).toHaveBeenCalled()
  })

  it("applies correct text color for primary type", () => {
    const wrapper = mount(UiButton, {
      props: { type: "primary" },
      slots: { default: "Text" }
    })
    const span = wrapper.find("span")
    const cls = span.classes().join(" ")
    expect(cls.includes("text-white") || cls.includes("ui-button__text")).toBe(true)
  })

  it("applies correct text color for outline type", () => {
    const wrapper = mount(UiButton, {
      props: { type: "outline" },
      slots: { default: "Text" }
    })
    const span = wrapper.find("span")
    const cls = span.classes().join(" ")
    expect(cls.includes("text-primary") || cls.includes("ui-button__text")).toBe(true)
  })

  it("shows loading text when RouterLink and loading is true", () => {
    const router = createTestRouter()
    const wrapper = mount(UiButton, {
      global: {
        plugins: [router]
      },
      props: {
        type: "primary",
        to: "/about",
        loading: true
      }
    })
    expect(wrapper.text()).toContain("Loading...")
  })

  it("does not navigate when RouterLink and loading is true", async () => {
    const router = createTestRouter()
    const pushSpy = vi.spyOn(router, "push")
    const wrapper = mount(UiButton, {
      global: {
        plugins: [router]
      },
      props: {
        type: "primary",
        to: "/about",
        loading: true
      }
    })

    const navigate = vi.fn()
    await (wrapper.vm as any).handleClick(new MouseEvent("click"), navigate)
    expect(pushSpy).not.toHaveBeenCalled()
    expect(navigate).not.toHaveBeenCalled()
  })

  it("does not navigate when RouterLink and disabled is true", async () => {
    const router = createTestRouter()
    const pushSpy = vi.spyOn(router, "push")
    const wrapper = mount(UiButton, {
      global: {
        plugins: [router]
      },
      props: {
        type: "primary",
        to: "/about",
        disabled: true
      }
    })

    const navigate = vi.fn()
    await (wrapper.vm as any).handleClick(new MouseEvent("click"), navigate)
    expect(pushSpy).not.toHaveBeenCalled()
    expect(navigate).not.toHaveBeenCalled()
  })
})
