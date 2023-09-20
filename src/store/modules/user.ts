import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { LoginFormData, LoginResponseData } from '@/api/user/type'
import { UserState } from '@/store/modules/types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
import { constantRoute } from '@/routers/router'
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
        this.token = res.data.token
        SET_TOKEN(res.data.token)
        localStorage.setItem('token', res.data.token)
        return Promise.resolve('ok')
      } else {
        console.log(res)

        return Promise.reject(res.data.message)
      }
    },
  },
  getters: {},
})
export { useUserStore }
