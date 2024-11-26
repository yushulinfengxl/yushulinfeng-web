<script setup>
// import 'mdui';

// const MduiAvatar = Avatar
const { setLocale, locales } = useI18n()

const store = useConfigStore()

const { count } = storeToRefs(store)

function btn() {
  count.value++
  console.log('kkk');
}

function setTheme(val) {
  document.getElementById('root').setAttribute('data-theme', val)
}


onUpdated(() => {
  console.log('jjjjjj');
  // console.log(initQWQ());

  console.log();
  
  
})

</script>

<template>
  <div>
    <!-- <client-only> -->
      <qwq-test>123</qwq-test>
      <mdui-button>Button</mdui-button>
    <mdui-avatar src="https://avatars.githubusercontent.com/u/3030330?s=40&v=4"></mdui-avatar>
    <qwq-test ival="123"></qwq-test>
    <!-- </client-only> -->
    
    Header - {{ count }}
    <button @click="btn">add</button>
    <button @click="setTheme('light')">light</button>
    <button @click="setTheme('dark')">dark</button>
    <button v-for="(v, k) in locales" :key="k" @click="setLocale(v.code)">
      {{ $t(`language.${v.code}`) }}
    </button>
    <!-- <button @click="setLocale('zhs')">中文</button> -->
  </div>
</template>

<style scoped lang="less">
</style>
