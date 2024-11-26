<template>
  <main class="main">
    <!-- 响应式布局 Responsive Layout -->
     <Background />
    <AsideBar />
      <!-- page component -->
    <Container>
      <slot />
    </Container>
  </main>
</template>

<script setup lang="js">
// # 响应式布局（Responsive Layout）
// # 定义：
// # 响应式布局是一种设计和开发技术，旨在使网站或应用在不同设备（如手机、平板、桌面）上都能获得良好的显示效果。它通过调整布局、文字大小和图像比例，确保在各种屏幕尺寸上都能呈现最佳体验。
// # 
// # 特点：
// # 自适应调整：通过 CSS 媒体查询动态调整元素尺寸和位置。
// # 灵活栅格系统：通常使用网格布局（如 Flexbox 或 CSS Grid）来组织内容。
// # 流式设计：使用百分比单位而非固定像素，使布局更灵活。
// # 隐藏或重新排列元素：在较小屏幕上隐藏次要内容，保留核心内容。
// # 应用场景：
// # 跨平台网站（如电子商务、博客、新闻站点）
// # 移动优先设计
// # 后台管理系统或仪表板
// # 任何需要在多种设备上访问的网站
// # 作用：
// # 提供一致的用户体验，提升易用性。
// # 确保不同设备上的可访问性和性能。
// # 有利于搜索引擎优化（SEO），Google 等搜索引擎优先考虑响应式网站。
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100vh;
}


</style>