<template>
  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
  <h1>测试scss样式</h1>
  <svg-com
    name="phone"
    style="background-color: red; height: 100px; width: 100px"
  ></svg-com>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
h1 {
  color: $color;
}
</style>
