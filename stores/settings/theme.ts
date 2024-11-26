import { defineStore } from 'pinia'

export const useSettingThemeStore = defineStore('settingTheme', () => {

  const theme_color = ref('#fff')
  const theme_bg_img_url = ref('')

  return {
    theme_color,
    theme_bg_img_url
  }
},
{
  // 持久化
  persist: true,
})