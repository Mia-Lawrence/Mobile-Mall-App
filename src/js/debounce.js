// 防抖函数
// 设置定时器，不让函数频繁执行，增加服务器压力，只在超过了指定时间的时候才执行目标函数
export const debounce = function (func, delay) {
  let timer = null
  return function (...arg) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, arg)
      // func(arg)
    }, delay)
  }
}
