export class BasicElement extends HTMLElement {
  constructor() {
    super(); // 调用父类的构造函数
    // this.attachShadow({ mode: 'open' }); // 创建一个 Shadow DOM 树
  }

  // 方法用于渲染元素内容
  render(modeName, htmlText) {
    this.attachShadow({ mode: modeName }); // 创建一个 Shadow DOM 树
    // 创建 link 标签
    // const link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.href = 'styles.css'; // 外部样式表路径

    // 插入到 Shadow DOM
    // this.shadowRoot.appendChild(link);

    // create element
    const mainDiv = document.createElement('main')

    // htmlText = 'Hello, Shadow DOM with external styles!';

    mainDiv.innerHTML = htmlText;
    this.shadowRoot.appendChild(mainDiv);
  }

  // 当属性变化时更新显示的内容
  static get observedAttributes() {
    return ['value'];
  }

  // 监听属性变化并更新内容
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value' && oldValue !== newValue) {
        this.render(); // 重新渲染
    }
  }

  static CreateCustomElement(name) {
    // 注册 <num-el> 元素
    customElements.define(`qwq-${name}`, this);
  }
}