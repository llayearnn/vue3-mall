import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 国际化
import zhCn from 'element-plus/dist/locale/zh-tw.mjs'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 注册全局组件
import globalComponent from '@/components/index'
import App from '@/App.vue'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(globalComponent)
// console.log(import.meta.env)
app.mount('#app')
