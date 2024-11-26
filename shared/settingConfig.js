
/**
 * 
 * @returns {Object<{[any: string]: Object<{[name: string]: Object;[value: string]: string;}>;}>}
 */
export function themeStylesVarConfig() {
  return {
    themeColor: {
      name: '--theme-color',
      value: '#ff6699'
    },
    mainBg: {
      name: '--main-bg',
      value: '#fff'
    },
    mainColor: '--main_color',
    textColor: '--text_color',
    textBoldColor: '--text_bold_color',
    lineColor: '--line_color'
  }
}