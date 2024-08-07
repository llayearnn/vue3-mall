import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件需要配置代码
import 'virtual:svg-icons-register'
// 注册全局组件
import globalComponent from '@/components/index'
import App from '@/App.vue'
import '@/styles/index.scss'
import router from './routers/index'
import 'uno.css'
// vxe-table
import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

import pinia from './store'
// import './permission'
// 指令
import directive from './directive'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(router)
app.use(pinia)
app.use(VxeTable)
app.use(VxeUI)
app.use(directive)

app.use(globalComponent)
// console.log(import.meta.env)
app.mount('#app')
