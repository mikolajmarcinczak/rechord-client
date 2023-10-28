import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

const app = createApp(App)

app.use(router)
app.mount('#app')

UIkit.use(Icons);
