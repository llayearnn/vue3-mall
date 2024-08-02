import type { Directive, DirectiveBinding } from 'vue'

// 创建一个 WeakMap 来存储元素和回调函数的映射关系
const elementWeakMap = new WeakMap<
  Element,
  (contentRect: DOMRectReadOnly) => void
>()

// 全局仅创建一个观察器，避免重复创建
const observer = new ResizeObserver(entries => {
  for (const elementObserver of entries) {
    elementWeakMap.get(elementObserver.target)?.(elementObserver.contentRect)
  }
})
const resize: Directive = {
  mounted(
    el: HTMLElement,
    binding: DirectiveBinding<(contentRect: DOMRectReadOnly) => void>,
  ) {
    elementWeakMap.set(el, binding.value)
    observer.observe(el)
  },
  beforeUnmount(el: HTMLElement) {
    // 停止观察器
    observer.unobserve(el)
    elementWeakMap.delete(el)
  },
}
export default resize
