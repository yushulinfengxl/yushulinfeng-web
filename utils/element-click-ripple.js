/**
 * @param {Event} e 传入一个元素事件对象
 * @returns null 返回为空
 */
export function createElementClickRipple(el, e, timer) {
  console.log('eeee', e);
  
  // const el = e.target
  let createDiv = document.createElement("div");
  
  createDiv.className = "ripple__block rippling";
  let maxHW = Math.max(el.offsetWidth, el.offsetHeight);
  createDiv.style.width = `${maxHW}px`;
  createDiv.style.height = `${maxHW}px`;
  // 动态设置动画时间，容器越大，动画时间越长
  createDiv.style.animation = `rippleAnima ${maxHW / 200}s linear`;
  // 重新计算水波纹的中心位置
  createDiv.style.top = `${e.offsetY - maxHW / 2}px`;
  createDiv.style.left = `${e.offsetX - maxHW / 2}px`;
  // 追加到元素中
  el.appendChild(createDiv);
  setTimeout(() => {
    // 删除元素
    el.removeChild(createDiv)
  }, timer);
}