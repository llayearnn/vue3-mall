import { defineStore } from 'pinia'
// import router from '@/router'
import { reqLogin, reqUserInfo } from '@/api/user'
import type {
  LoginFormData,
  LoginResponseData,
  userInfoResponseData,
} from '@/api/user/type'
import { UserState } from '@/store/modules/types/type'
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from '@/utils/token'
import {
  constantRoute,
  // asyncRoute,
  //  anyRoute
} from '@/routers/router'

// import { cloneDeep } from 'lodash'

// function filterAsyncRoute(asyncRoute: any, routes: any) {
//   return asyncRoute.filter((item: any) => {
//     if (routes.includes(item.name)) {
//       if (item.children && item.children.length > 0) {
//         item.children = filterAsyncRoute(item.children, routes)
//       }
//       return true
//     }
//   })
// }
const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
      buttons: [],
    }
  },
  // 异步逻辑
  actions: {
    async userLogin(val: LoginFormData) {
      const res: LoginResponseData = await reqLogin(val)
      if (res.code == 200) {
        this.token = res.data
        SET_TOKEN(res.data)
        localStorage.setItem('token', res.data)
        return Promise.resolve('ok')
      } else {
        return Promise.reject(res.data)
      }
    },
    async userInfo() {
      const res: userInfoResponseData = await reqUserInfo()

      if (res.code === 200) {
        this.username = res.data.name as string
        this.avatar = res.data.avatar as string
        // const userAsyncRoute = filterAsyncRoute(
        //   cloneDeep(asyncRoute),
        //   res.data.routes,
        // )
        // this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute]
        // ;[...userAsyncRoute, anyRoute].forEach((route: any) => {
        //   router.addRoute(route)
        // })
        return Promise.resolve('ok')
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async userLogout() {
      // let res = await reqLogOut()
      // if (res.code === 200) {
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
      // } else {
      //   return Promise.reject(new Error(res.message))
      // }
    },
  },
  getters: {},
})
export { useUserStore }
