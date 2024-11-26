export default defineNuxtPlugin(() => {
  const autoLoadStylesDirectory = async (path: string, conf: string, filename: string) => {
    const styles = await fetch(`${path}/${conf}.json`).then(res => res.json());
    styles.forEach((css: string) => {
      const el = document.createElement('link');
      el.href = `${path}/${css}.${filename}`;
      el.rel = 'stylesheet';
      document.head.appendChild(el);
    });
  };

  return {
    provide: {
      autoLoadStylesDirectory
    }
  };
});


// 自动加载js script