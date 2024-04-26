import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-purple/theme.css'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'

const app = createApp(App)

app.use(MotionPlugin)
app.use(createPinia())
app.use(PrimeVue)
app.use(router)
app.use(VeeValidatePlugin)
app.component('fa', FontAwesomeIcon)

app.mount('#app')
