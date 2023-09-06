<template>
  <div class="not-found">
    <svg-com name="404-1" width="500px" height="500px"></svg-com>
    <h1>失踪了。。。</h1>
    <svg-com
      class="rotate-svg"
      name="404-2"
      width="50px"
      height="50px"
    ></svg-com>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: baseline;
  .rotate-svg {
    animation: rotate-01 5s ease-in-out infinite;
  }
}
@keyframes rotate-01 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
