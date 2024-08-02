1. mutationObserver
   是一个在浏览器环境中一种用于监听DOM变化的JavaScript API，
   它可以用于监听 DOM 树中指定节点及其子节点的变化，当节点内容、属性、子节点结构等发生改变时，它可以及时检测到并触发回调函数。这对于前端开发来说非常有用，可以被用来监控 DOM 变化、异步数据加载和自定义组件等场景。
   // 创建一个 MutationObserver 实例，监听目标节点的变化
   `const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
               console.log(mutation.type); // 打印出变化类型，例如 childList、attributes 等
           });
    });`
   // 配置 MutationObserver，指定监听的节点和监听类型
   `const config = {
      attributes: true, // 监听属性变化
      childList: true, // 监听子节点变化
      characterData: true, // 监听文本内容变化
      subtree: true // 监听后代节点变化
    };`
   // 将 MutationObserver 实例绑定到一个目标节点
   `const targetNode = document.getElementById("target");
    observer.observe(targetNode, config);`

2. ResizeObserver：专注于尺寸变化
   ResizeObserver 是一个专门用于观察元素尺寸变化的API。它在元素的宽度或高度发生变化时触发回调函数。这使得它非常适合用于响应式布局和需要根据元素尺寸动态调整内容的场景。
   特点：
   关注点：只关注元素的尺寸变化（宽度和高度）。
   性能：ResizeObserver 的设计考虑了性能，避免了频繁的回调调用。

3. IntersectionObserver
   提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(viewport)交叉状态的方法。祖先元素与视窗(viewport)被称为根(root)。当一个IntersectionObserver对象被创建时，其被配置为监听根中一段给定比例的可见区域。一旦IntersectionObserver被创建，则无法更改其配置，所以一个给定的观察者对象只能用来监听可见区域的特定变化值；然而，你可以在同一个观察者对象中配置监听多个目标元素。
