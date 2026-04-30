import { createApp } from "vue"
import { createPinia } from "pinia"
import { createI18n } from "vue-i18n"
import router from "@/router"
import App from "@/App.vue"
import { LOCALES } from "@/types/enums/locales.enum"
import enMessages from "@/i18n/locales/en.json"
import ruMessages from "@/i18n/locales/ru.json"
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

