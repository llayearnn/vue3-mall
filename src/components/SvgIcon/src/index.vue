<template>
  <!-- 
    svg 图标外层容器节点，内部需要use标签
    xlink:href指定用哪一个图标，属性值以 #icon-加 图标名字（assets/icons下的图标）
    fill 改颜色
   -->
  <svg :width="width" :height="height" :style="style">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: 'black',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
  style: Object,
})
</script>

<style scoped></style>
