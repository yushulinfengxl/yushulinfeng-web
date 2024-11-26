<template>
  <aside class="aside">
    <!-- top -->
    <div class="top navbar icons base">
      <div class="icon-box router__link">
        <NuxtLink to="/">
          <div class="icon-inner">
            <Icon name="home" />
          </div>
        </NuxtLink>
      </div>

      <div class="icon-box router__link">
        <NuxtLink to="/search">
          <div class="icon-inner">
            <Icon name="search" />
          </div>
        </NuxtLink>
      </div>

      <div class="icon-box router__link">
        <NuxtLink to="/test">
          <div class="icon-inner">
            <Icon name="time" />
          </div>
        </NuxtLink>
      </div>
    </div>
    <!-- center -->
    <div class="center logo base"></div>
    <!-- bottom -->
    <div class="bottom self icons base">
      <div class="icon-box router__link">
        <NuxtLink to="/test">
          <div class="icon-inner">
            <Icon name="user" />
          </div>
        </NuxtLink>
      </div>

      <div class="icon-box router__link">
        <NuxtLink to="/test">
          <div class="icon-inner">
            <Icon name="settings" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<style lang="less">
aside,
.aside {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--aside-width);
  /* min-width: var(--aside-min-width); */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--main-bg);
  z-index: 10;
}

aside .base {
  position: relative;
}

aside .icon-box {
  position: relative;
  width: 100%;
  padding-top: 100%;
  height: 0;
}

aside a {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  padding: 10%;
}

aside .icon-inner {
  width: 100%;
  height: 100%;
  padding: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2rem;
}

aside .icon-inner:hover {
  background-color: var(--accent-hover-overlay);
}

</style>
