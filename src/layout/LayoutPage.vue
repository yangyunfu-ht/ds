<template>
  <section class="layout">
    <LayoutMenu :tabWidth="70" :menuWidth="220"></LayoutMenu>
    <section class="layout-main">
      <LayoutHeader></LayoutHeader>
      <main class="layout-main-content">
        <router-view></router-view>
      </main>
    </section>
  </section>
</template>

<script setup lang="ts">
import LayoutMenu from './components/LayoutMenu.vue'
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<style scoped lang="scss">
.layout {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
  padding: 6px;
  overflow: hidden;

  .layout-main {
    padding: 0 0 6px 6px;
    overflow: hidden;

    .layout-main-content {
      box-sizing: border-box;
      height: 100%;
      overflow: scroll;
    }

    .layout-main-content {
      /* 设置滚动条的样式 */
      &::-webkit-scrollbar {
        width: 6px;
        height: 10px;
      }

      /* 滚动槽 */
      &::-webkit-scrollbar-track {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: inset 0 0 6px #a8abb2;
      }

      /* 滚动条滑块 */
      &::-webkit-scrollbar-thumb {
        height: 10px;
        background: rgb(0 0 0 / 10%);
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgb(47 48 52 / 20%);
      }

      &::-webkit-scrollbar-thumb:window-inactive {
        background-color: rgb(47 48 52 / 20%);
      }
    }
  }
}
</style>
