<template>
  <el-tooltip
    :disabled="showTooltip"
    :content="strContent"
    v-bind="{ ...tooltipProps }"
  >
    <div
      v-bind="$attrs"
      class="inline-block w-full text-ellipsis"
      @mouseover="onMouseOver(textRef)"
    >
      <span ref="textRef">{{ content }}</span>
    </div>
  </el-tooltip>
</template>

<script setup lang="ts">
import type { ElTooltipProps } from 'element-plus'
defineOptions({
  name: 'LaTooltip',
})
type Props = {
  content: any // 需要显示的文本
  tooltipProps?: Partial<Omit<ElTooltipProps, 'content'>> // 朝向
}
const props = withDefaults(defineProps<Props>(), {
  tooltipProps: () => ({
    placement: 'top',
  }),
})
const strContent = computed(() => {
  return String(props.content ?? '')
})
const showTooltip = ref<boolean>(false)
const textRef = ref()
const onMouseOver = (ref: HTMLElement) => {
  const parentWidth = (<HTMLElement>ref?.parentNode).offsetWidth
  const contentWidth = ref?.offsetWidth
  // 如果子元素的宽度大于父元素的宽度则否开启 tooltip
  if (contentWidth > parentWidth) {
    showTooltip.value = false
  } else {
    showTooltip.value = true
  }
}
</script>
