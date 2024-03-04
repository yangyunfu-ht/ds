import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './style/style.css'
import App from './App.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { Watermark } from '@/directives/WaterMark'

const pinia = createPinia()
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)

app.directive('watermark', Watermark)
app.mount('#app')

router.beforeEach(to => {
  NProgress.start()
  document.title = to.name as string
})

router.afterEach(() => {
  NProgress.done()
})
