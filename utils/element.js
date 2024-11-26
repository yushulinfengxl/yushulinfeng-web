
/**
 * DOM元素对象class name活动添加或删除
* @param {Element} el DOM元素对象
* @param {string} className 可进行传参，如果不传则默认参数为 "active"
*/
export function elClassToActiv(el, className = "active") {
  const classList = el.classList.value.split(' ')
  let flag = false
  classEndTag: for (const index in classList) {
    const n = classList[index]
    if (n == className) {
      el.classList.remove(className)
      flag = true
      break classEndTag
    }
  }
  if (!flag) {
    el.classList.add(className)
  }
}

/**
* inputChange 上传图片文件
* @param {Element} el input DOM元素
* @param {function name(params Element)} fn 接收一个input DOM元素对象参数
* @returns 无任何返回值
*/
export function elInputChangeImage(el, fn = function (el = Element) { }) {
  const file = el.files[0];
  const reder = new FileReader();
  reder.onload = (e) => {
    fn(e)
  }
  reder.readAsDataURL(file);
}
