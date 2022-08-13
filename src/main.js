import { createApp, provide } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import mitt from 'mitt';

import './assets/styles.scss';

const emitter = mitt();
const pinia = createPinia()

createApp(App)
    .provide('emitter', emitter)
    .use(pinia)
    .mount('#app')
