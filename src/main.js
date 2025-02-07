import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import request from './utils/request'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.config.globalProperties.$request = request;
app.use(router)
.use(ElementPlus)
.mount('#app')

