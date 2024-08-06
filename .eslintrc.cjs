module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // 规则继承
  extends: [
    'eslint:recommended', // 默认规则是关闭，开启推荐规则
    'plugin:@typescript-eslint/recommended', // ts语法规则
    'plugin:vue/vue3-essential', // vue3语法规则
    './.eslintrc-auto-import.json', // 自动导入规则
  ],
  // 对特定的类型的文件指定处理器（markdown）
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'vue'],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    'generator-star-spacing': 'off',
    'vue/script-setup-uses-vars': ['off'],
    'vue/multi-word-component-names': ['off'],
    'vue/no-mutating-props': ['off'],
    'vue/valid-model-definition': ['off'],
    'vue/valid-attribute-name': ['off'],
    'vue/comment-directive': ['off'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'no-useless-escape': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-namespace': 'off',
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ], //不能有声明后未被使用的变量或参数
    'vue/no-v-html': 'off',
  },
}
