import type { App, Plugin } from 'vue'
import intersect from './intersect'
import resize from './resize'

import { ClickOutside } from 'element-plus'

const arr = [
  { name: 'intersect', value: intersect },
  { name: 'resize', value: resize },
  { name: 'clickOutside', value: ClickOutside },
]

const directive: Plugin = {
  install: (app: App) => {
    arr.forEach(val => {
      app.directive(val.name, val.value)
    })
  },
}
export default directive
