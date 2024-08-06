import path from 'node:path'
import globals from 'globals'
import js from '@eslint/js'
import unocss from '@unocss/eslint-config/flat'
import pluginVue from 'eslint-plugin-vue'
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})
export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...compat.extends('@vue/eslint-config-typescript/recommended'),
  ...compat.extends('@vue/eslint-config-prettier/skip-formatting'),
  unocss,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es6,
      },
    },
    // ignores: [''],
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
      // '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-namespace': 'off',
      'no-unused-vars': 'off',
      'vue/no-v-html': 'off',
    },
  },
]
