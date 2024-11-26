import { themeStylesVarConfig } from "~/shared/settingConfig"

/**
 * @function setTingThemeColor 设置主题色
 *
 * ```js
 * // 设置红色
 * setTingThemeColor('red')
 * ```
 *
 * @param {String} color 接收一个string类型的参数，不填则默认#333
 * @returns null
 */
export function setTingThemeColor(color = '#333') {
  // 拿到root元素
  const rootEL = document.querySelector('#root')

  // 获取样式变量名字
  const cssVar = themeStylesVarConfig()

  // 设置主题样式变量颜色
  rootEL.style.setProperty(cssVar.themeColor.name, color)
}

/**
 * @function settingThemeMode 设置主题模式（light，dark）
 *
 * ```js
 * settingThemeMode('light')
 * ```
 *
 * @param {String} name 接收一个string类型的参数，不填则默认light
 * @returns null
 */
export function settingThemeMode(name = 'light') {
  const rootEl = document.querySelector('#root')
  rootEl.setAttribute('data-theme', name)
}