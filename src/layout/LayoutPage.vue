<template>
  <section class="layout">
    <aside class="layout-menu">
      <LayoutMenu></LayoutMenu>
    </aside>
    <main class="layout-main">
      <header class="layout-main-header">
        <LayoutHeader></LayoutHeader>
      </header>
      <main class="layout-content-main">
        <router-view></router-view>
      </main>
    </main>
  </section>
</template>

<script setup lang="ts">
import LayoutMenu from './components/LayoutMenu.tsx'
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  height: 100%;
  background-color: #f2f6fc;

  .layout-menu {
    box-sizing: border-box;
    width: 250px;
    background-color: #fff;
    box-shadow:
      0 2px 4px rgb(0 0 0 / 22%),
      0 0 6px rgb(0 0 0 / 14%);
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
  }

  .layout-main {
    display: flex;
    flex-direction: column;
    width: calc(100vw - 250px);
    min-width: 1000px;

    .layout-main-header {
      width: calc(100vw - 250px);
      background-color: #fff;
      box-shadow:
        0 2px 4px rgb(0 0 0 / 12%),
        0 0 6px rgb(0 0 0 / 4%);
    }

    .layout-content-main {
      padding: 8px;
      overflow-y: scroll;
      scroll-behavior: smooth;
    }

    /* 设置滚动条的样式 */
    .layout-content-main::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
