import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { LoginFormData } from '@/api/user/type'
const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('token'),
    }
  },
  // 异步逻辑
  actions: {
    async userLogin(val: LoginFormData) {
      const res = await reqLogin(val)
      if (res.code == 200) {
        this.token = res.data.token
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
