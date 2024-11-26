<template>
  <div class="configure"></div>
</template>

<script setup lang="js">
// import 'mdui/mdui.css';
const config = useRuntimeConfig()

const { $autoLoadScriptsDirectory, $autoLoadStylesDirectory } = useNuxtApp();
// import { locale } from useI18n()


// 设置主题
const settingThemeStore = useSettingThemeStore()
const { theme_color:ThemeColor } = storeToRefs(settingThemeStore)

onMounted(() => {
  // 设置主题css变量
  const rootEl = document.getElementById('root')
  rootEl?.style.setProperty('--theme_color', ThemeColor.value)
})
</script>
