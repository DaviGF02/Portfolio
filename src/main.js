import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import Tres from '@tresjs/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Tres)

app.mount('#app')
