// Tool function

/**
 * singleton 单例
 * @param {class} className 需要单例的class类名
 * @returns 返回单例实例
 */
export function singleton(className) {
  let ins;
  return new Proxy(className, {
    construct(target, args) {
      if (!ins) {
        return new className(target, ...args)
      }
      return ins;
    }
  })
}

/**
 * debounce 防抖函数
 * @param {Function} fn 执行函数
 * @param {Number} time 防抖时间
 * @returns 
 */
export function debounce(fn, time) {
  // 4.创建一个标记用来存放定时器的返回值
  let timeout = null;
  return function () {
    // 5.每当用户触发input事件  把前一个 setTimeout 清楚掉
    clearTimeout(timeout);
    // 6.然后又创建一个新的 setTimeout, 这样就能保证输入字符后等待的间隔内 还有字符输入的话，就不会执行 setTimeout里面的内容
    timeout = setTimeout(() => {
      // 7.这里进行防抖的内容
      fn();
    }, time);
  };
}

/**
 * throttle 封装节流函数
 * @param {Function} fn 执行函数
 * @param {Number} time 节流时间
 * @returns 
 */
export function throttle(fn, time) {
  //3. 通过闭包保存一个 "节流阀" 默认为false
  let temp = false;
  return function () {
    //8.触发事件被调用 判断"节流阀" 是否为true  如果为true就直接trurn出去不做任何操作
    if (temp) {
      return;
    } else {
      //4. 如果节流阀为false  立即将节流阀设置为true
      temp = true; //节流阀设置为true
      //5.  开启定时器
      setTimeout(() => {
        //6. 将外部传入的函数的执行放在setTimeout中
        fn.apply(this, arguments);
        //7. 最后在setTimeout执行完毕后再把标记'节流阀'为false(关键)  表示可以执行下一次循环了。当定时器没有执行的时候标记永远是true，在开头被return掉
        temp = false;
      }, time);
    }
  };
}

export function utilTest() {
  console.log('hello util test qwq');
}