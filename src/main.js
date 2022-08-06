import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/styles.scss'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .mount('#app')
