import './assets/main.css'
import 'reflect-metadata'
import { createApp, type Component } from 'vue'
import { createPinia } from 'pinia'
import App from './app/App.vue'

const app = createApp(App as unknown as Component)

app.use(createPinia())

app.mount('#app')
