import {
  createRouter,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import { constantRouts } from './router'

const router = createRouter({
  // 路由模式
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes: constantRouts,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router
