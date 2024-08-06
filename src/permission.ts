import router from '@/routers'
import setting from './setting'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import pinia from './store'
import { useUserStore } from './store/modules/user'
nprogress.configure({ showSpinner: false })
const userStore = useUserStore(pinia)
router.beforeEach(async (to, from, next) => {
  console.log(from)

  document.title = to.meta.title + ` | ${setting.title}`
  nprogress.start()

  const token = userStore.token
  const username = userStore.username
  // 判断用户有没有登录

  if (!token) {
    console.log('token ', token)
    // 如果登录成功还想访问登录页，则不允许。重定向到首页
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (username) {
        next()
      } else {
        try {
          // await userStore.userInfo()
          next()
          // next({ ...to })
          // token 过期
        } catch (error) {
          await userStore.userLogout()
          next({ path: '/login', query: { redirect: to.path } })
        }
      }
    }
  } else {
    if (to.path == '/login') {
      console.log('1111111 ', 111111111)
      next()
    } else {
      // 未登录直接先指向登录页面 ，同时用query缓存他想要区得页面
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})
// 全局后置守卫

router.afterEach(() => {
  nprogress.done()
})
