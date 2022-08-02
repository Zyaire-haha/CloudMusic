// 设置 rem 函数pageWidth
function setRem () {
  let pageWidth = window.innerWidth
  // 为了ie也能拿到可视窗口宽度
  if (typeof pageWidth !== 'number') {
    // 标准模式
    if (document.compatMode === 'CSS1Compat') {
      pageWidth = document.documentElement.clientWidth
      // 怪异模式
    } else {
      pageWidth = document.body.clientWidth
    }
  }
  if (pageWidth >= 750) {
    pageWidth = 750
  }
  if (pageWidth <= 320) {
    pageWidth = 320
  }
  document.documentElement.style.fontSize = (pageWidth / 7.5) + 'px'
  document.querySelector('body').style.fontSize = 0.3 + 'rem'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}
