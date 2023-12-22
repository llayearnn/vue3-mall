function MyDebounce(func, wait, immediate) {
  let timeout
  return function () {
    const context = this
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      timeout = setTimeout(() => {
        func.apply(context, arguments)
      }, wait)
    }
  }
}
