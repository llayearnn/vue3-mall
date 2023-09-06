<template>
  <div class="login_layout">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form>
          <el-form-item label="你好"></el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.login_layout {
  height: 100vh;
  // width: 100vw;
  // width: 100%;
  background: url('@/assets/images/background1.jpg') no-repeat;
  background-size: cover;
}
</style>
