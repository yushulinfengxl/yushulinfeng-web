<template>
  <div class="background">
    
  </div>
</template>

<style scoped lang="less">
.background {
  width: 100%;
  height: 100%;
  background-image: url(/bg/01.jpg);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.background::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffffde;
}
</style>