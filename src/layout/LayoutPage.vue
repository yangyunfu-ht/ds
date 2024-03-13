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

    ::-webkit-scrollbar {
      display: none;

      /* Chrome Safari */
    }
  }

  .layout-main {
    display: flex;
    flex-direction: column;
    width: calc(100vw - 250px);

    ::-webkit-scrollbar {
      display: none;

      /* Chrome Safari */
    }

    .layout-main-header {
      width: calc(100vw - 250px);
      background-color: #fff;
      box-shadow:
        0 2px 4px rgb(0 0 0 / 12%),
        0 0 6px rgb(0 0 0 / 4%);
    }

    .layout-content-main {
      margin: 12px;
      overflow-y: scroll;

      ::-webkit-scrollbar {
        display: none;

        /* Chrome Safari */
      }
    }
  }
}
</style>
