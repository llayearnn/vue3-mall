<template>
  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
  <div class="demo-pagination-block">
    <div class="demonstration">分页</div>
    <el-pagination
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <HelloWorld :msg="hello"></HelloWorld>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import HelloWorld from '@/components/HelloWorld.vue'
const pageSize4 = ref(100)
const hello = ref('hello')
const small = ref(false)
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>
<style lang="scss" scoped></style>
