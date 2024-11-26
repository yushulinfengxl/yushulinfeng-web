
// plugins/init.config.client.js
export default defineNuxtPlugin(() => {
  if (process.client) {
    // print console log
    console.log('init element config client plugin js file');
    // 注册mdui custom element
    // import('mdui');
    // 加载mdui css
    // import('mdui/mdui.css');
    // 注册qwq custom element
    // import('~/assets/scripts/ui/main.js');
    // 加载qwq css
    import('~/assets/styles/basic.css');
    import('~/assets/styles/theme/light_theme.css');
    import('~/assets/styles/theme/dark_theme.css');
    import('~/assets/styles/main.css');

    // const storeConfig = useConfigStore()

    // const { test } = storeToRefs(storeConfig)
    // test.value++
    // 在线更新网页
    // const updateWebTimer = async () => {
    //   const { data } = await useFetch('/api/v')
    // }
    // setInterval(updateWebTimer, 500);
  }

  
});
