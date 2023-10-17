<template>
  <div class="login_layout">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>welcome</h1>
          <h2>lay商城</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
              placeholder=""
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              type="password"
              show-password
              v-model="loginForm.password"
              placeholder=""
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_btn" type="primary" @click="login">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage, ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
const loginForm = reactive({
  // username: 'admin',
  // password: '123456',
  username: 'admin',
  password: 'atguigu123',
})
const userStore = useUserStore()
const $router = useRouter()
let $route = useRoute()

const login = async () => {
  try {
    const res = await userStore.userLogin(loginForm)
    if (res == 'ok') {
      ElNotification.success({
        type: 'success',
        message: '欢迎回来',
        title: `Hi,${getTime()}好`,
      })
      // 判断有没有query参数 如果有则重定向
      let redirect: string = $route.query.redirect as string
      $router.push({ path: redirect || '/' })
      // $router.push('./')
    } else {
      console.log(res)
      // ElMessage.error('登录失败, 密码错误.')
    }
  } catch (error) {
    ElMessage.error('登录失败, 密码错误.')
  }
}
</script>

<style lang="scss" scoped>
.login_layout {
  height: 100vh;
  // width: 100vw;
  // width: 100%;
  background: url('@/assets/images/background1.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    top: 30vh;
    width: 80%;
    padding: 40px;
    h1 {
      font-size: 40px;
      color: wheat;
    }
    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
