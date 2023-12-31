import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { router } from "./router"

createApp(App).use(router).mount('#app')
