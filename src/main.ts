import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './style/style.css'
import App from './App.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { vFoucs } from './directives/WaterMark'

const app = createApp(App)

app.directive('fousc', vFoucs)

NProgress.configure({
  showSpinner: false, // 进度环显示隐藏
  parent: 'body', //指定进度条的父容器
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.use(pinia)
app.mount('#app')

router.beforeEach(to => {
  NProgress.start()
  document.title = to.name as string
})

router.afterEach(() => {
  NProgress.done()
})
