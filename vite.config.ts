import { ConfigEnv, UserConfigExport, loadEnv } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

import { resolve } from 'path'
// 引入svg
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  // 获取各种环境下对应的变量；process.cwd()表示项目根目录
  const env = loadEnv(mode, process.cwd())
  console.log(' env', env)
  return {
    base: './',
    plugins: [
      vue(),
      UnoCSS(),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        localEnabled: command === 'serve', // 保证开发阶段可以用mock
      }),
      AutoImport({
        // 可以自动全局引入全局依赖，减少重复引入 ref ,reactive,等
        imports: [
          'vue',
          'vue-router',
          {
            'element-plus': ['ElMessage', 'ElMessageBox', 'ElNotification'],
          },
        ],
        eslintrc: {
          enabled: false, // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
          filepath: './.eslintrc-auto-import.json',
        },
      }),
    ],

    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        // 配置全局 scss 变量
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
    server: {
      port: 8088,
      open: true,
      host: 'localhost',
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_SERVE,
          // 需要代理跨域
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  }
}
