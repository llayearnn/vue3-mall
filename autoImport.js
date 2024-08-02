// 自动引入
import AutoImport from 'unplugin-auto-import/vite'

export default AutoImport({
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/,
    /\.vue\?vue/,
  ],
  imports: [
    // presets
    'vue',
    'vue-router',
    {
      'element-plus': ['ElMessage', 'ElMessageBox', 'ElNotification'],
    },
    {
      '@/utils/index.ts': ['getSelectLabel'],
    },
  ],
  dts: true,
  // dirs: ['./src/utils'], // 自动导入目录
  vueTemplate: true,
  eslintrc: {
    enabled: false, // Default `false` 1.改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
    // provide path ending with `.mjs` or `.cjs` to generate the file with the respective format
    filepath: './.eslintrc-auto-import.js', // Default `./.eslintrc-auto-import.json`
    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
  },
})
