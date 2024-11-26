import { BasicElement } from '../basic/element.js'

/**
 * @summary TEST组件
 *
 * ```html
 * <qwq-test value="123"></qwq-test>
 * ```
 *
 * @slot - 自定义头像内容，可以为字母、汉字、`<img>` 元素、图标等
 *
 * @csspart image - 使用图片作为头像时，组件内部的 `<img>` 元素
 * @csspart icon - 使用图标作为头像时，组件内部的 `<mdui-icon>` 元素
 *
 * @cssprop --shape-corner - 组件的圆角大小。可以指定一个具体的像素值；但更推荐引用[设计令牌](/docs/2/styles/design-tokens#shape-corner)
 */
export class TestEL extends BasicElement {
  constructor() {
    super(); // 调用父类的构造函数
    // this.attachShadow({ mode: 'open' }); // 创建一个 Shadow DOM 树
    this.render('open', 'hhh'); // 渲染元素内容
    console.log('jjj');
  }
}

// 注册 <num-el> 元素
// customElements.define('i-test', TestEL);
TestEL.CreateCustomElement('test')