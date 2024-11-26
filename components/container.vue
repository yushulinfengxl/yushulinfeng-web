<template>
  <div class="container">
    <slot />
  </div>
</template>

<style>
.container {
  padding-left: var(--aside-width);
  position: relative;
  z-index: 2;
}
</style>