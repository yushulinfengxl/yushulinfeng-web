export default defineNuxtPlugin(() => {
  const autoLoadScriptsDirectory = async (path: string) => {
    const scripts = await fetch(`${path}/scripts.json`).then(res => res.json());
    scripts.forEach((script: string) => {
      const el = document.createElement('script');
      el.src = `${path}/${script}`;
      el.async = true;
      document.body.appendChild(el);
    });
  };

  return {
    provide: {
      autoLoadScriptsDirectory
    }
  };
});


// 自动加载js script