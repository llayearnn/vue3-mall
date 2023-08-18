import { App } from 'vue'
import SvgCom from './src/index.vue'

SvgCom.install = (app: App): void => {
  app.component('svg-com', SvgCom)
}
export default SvgCom
