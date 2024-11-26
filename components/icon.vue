<template>
  <i class="icon">
    <svg>
      <use :href="'/icons.svg#' + name" style="font-weight: bold;"></use>
    </svg>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path d="M10 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12m-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10"/></svg> -->
  </i>
</template>

<script setup lang="js">
const { name } = defineProps({
  name: String
})
</script>

<style lang="less">
.icon {
  display: inline-flex;
}

.icon, .icon svg {
  height: 1em;
  width: 1em;
}

.icon svg, .icon use .icon * {
  fill: var(--text-color);
  color: var(--text-color);
}

aside .router-link-active .icon * {
  fill: var(--theme-color);
  color: var(--theme-color);
}
</style>