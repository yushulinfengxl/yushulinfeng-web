<template>
  <div class="ripple nocopy">
    <div ref="rippleEl" class="ripple__box" @click="rippleBtn">
      <slot />
    </div>
  </div>
</template>

<script setup lang="js">
const { delay } = defineProps({
  delay: Number,
})

const rippleEl = ref(null)

function rippleBtn(e) {
  createElementClickRipple(rippleEl.value, e, delay)
}
</script>

<style lang="less">
.ripple {
  width: 100%;
  height: 100%;
}

.ripple .ripple__box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.ripple .ripple__box:hover {
  background-color: var(--accent-hover-overlay);
}

/* 水波纹样式-开始 */
.ripple__box {
  position: relative;
  overflow: hidden;
}
.ripple__block {
  position: absolute;
  z-index: 10;
  background: var(--accent-ripple);
  border-radius: 50%;
  opacity: 1;
  top: 0;
  left: 0;
  -ms-transform: scale(0);
  -moz-transform: scale(0);
  -o-transform: scale(0);
  -webkit-transform: scale(0);
  transform: scale(0);
  pointer-events: none;
  /*   height: 100%;
  width: 100%; */
}
/* .ripple-div.rippling {
  -ms-animation: rippleAnima 0.6s linear;
  -moz-animation: rippleAnima 0.6s linear;
  -o-animation: rippleAnima 0.6s linear;
  -webkit-animation: rippleAnima 0.6s linear;
  animation: rippleAnima 0.6s linear;
} */
@-ms-keyframes rippleAnima {
  to {
    opacity: 0;
    -ms-transform: scale(3);
    -moz-transform: scale(3);
    -o-transform: scale(3);
    -webkit-transform: scale(3);
    transform: scale(3);
  }
}
@-moz-keyframes rippleAnima {
  to {
    opacity: 0;
    -ms-transform: scale(3);
    -moz-transform: scale(3);
    -o-transform: scale(3);
    -webkit-transform: scale(3);
    transform: scale(3);
  }
}
@-o-keyframes rippleAnima {
  to {
    opacity: 0;
    -ms-transform: scale(3);
    -moz-transform: scale(3);
    -o-transform: scale(3);
    -webkit-transform: scale(3);
    transform: scale(3);
  }
}
@-webkit-keyframes rippleAnima {
  to {
    opacity: 0;
    -ms-transform: scale(3);
    -moz-transform: scale(3);
    -o-transform: scale(3);
    -webkit-transform: scale(3);
    transform: scale(3);
  }
}
@keyframes rippleAnima {
  to {
    opacity: 0;
    -ms-transform: scale(3);
    -moz-transform: scale(3);
    -o-transform: scale(3);
    -webkit-transform: scale(3);
    transform: scale(3);
  }
}
/* 水波纹样式-结束 */
</style>