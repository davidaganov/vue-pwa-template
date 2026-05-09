import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import { createPinia } from "pinia"
import router from "@/router"
import enMessages from "@/i18n/locales/en.json"
import ruMessages from "@/i18n/locales/ru.json"
import { LOCALES } from "@/types/enums/locales.enum"
import App from "@/App.vue"
import "@/assets/styles/main.css"

const i18n = createI18n({
  legacy: false,
  locale: LOCALES.EN,
  fallbackLocale: LOCALES.EN,
  messages: {
    [LOCALES.EN]: enMessages,
    [LOCALES.RU]: ruMessages
  }
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount("#app")
