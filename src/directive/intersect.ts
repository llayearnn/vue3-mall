import type { Directive, DirectiveBinding } from 'vue'
/**
 * 观察目标元素与其祖先元素或顶级文档视窗 (viewport) 交叉状态的方法。
 * 祖先元素与视窗 (viewport) 被称为根 (root)。即目标元素是否在在祖先元素或视窗 (viewport) 的视口中。
 */

// 创建观察器 键为dom；值为dom绑定的回调函数
const elementIntersectWeakMap = new WeakMap<
  Element,
  (ele: boolean, rest: any) => void
>()

// 创建观察者 IntersectionObserver
const observer = new IntersectionObserver(entries => {
  for (const eleObserver of entries) {
    elementIntersectWeakMap.get(eleObserver.target)?.(
      eleObserver?.isIntersecting,
      eleObserver,
    )
  }
})
const intersect: Directive = {
  mounted(
    el: HTMLElement,
    binding: DirectiveBinding<(contentRect: boolean) => void>,
  ) {
    elementIntersectWeakMap.set(el, binding.value) // 存储该方法绑定的事件
    observer.observe(el) // 开始观察 dom
  },
  beforeUnmount(el: HTMLElement) {
    // 停止观察器
    observer.unobserve(el)
    elementIntersectWeakMap.delete(el) // 移除该元素
  },
}
export default intersect
