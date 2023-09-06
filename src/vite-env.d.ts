/// <reference types="vite/client" />
// 三斜线指令： 指定依赖的的其他类型声明文件 types表示依赖的类型声明文件包名称
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'element-plus'
declare module 'nprogress'
declare module 'element-plus/dist/locale/zh-cn.mjs'
declare module 'element-plus/dist/locale/zh-tw.mjs'
