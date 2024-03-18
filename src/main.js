import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-purple/theme.css'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(router)
app.use(VeeValidatePlugin)

app.mount('#app')
