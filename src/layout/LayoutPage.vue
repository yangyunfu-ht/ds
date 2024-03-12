<template>
  <section class="layout">
    <aside class="layout-menu">
      <LayoutAside></LayoutAside>
    </aside>
    <main class="layout-main">
      <header class="layout-main-header">
        <LayoutHeader></LayoutHeader>
      </header>
      <main style="margin: 12px">
        <router-view></router-view>
      </main>
    </main>
  </section>
</template>

<script setup lang="ts">
import LayoutAside from './components/LayoutAside.tsx'
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  height: 100%;
  background-color: #f2f6fc;

  & .layout-menu {
    box-sizing: border-box;
    width: 250px;
    background-color: #fff;
    box-shadow:
      0 2px 4px rgb(0 0 0 / 22%),
      0 0 6px rgb(0 0 0 / 14%);
  }

  & .layout-main {
    flex: 1;

    & .layout-main-header {
      height: 50px;
      background-color: #fff;
      box-shadow:
        0 2px 4px rgb(0 0 0 / 12%),
        0 0 6px rgb(0 0 0 / 4%);
    }
  }
}
</style>
