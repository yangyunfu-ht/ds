<template>
  <div class="layout-header">
    <div class="menu-toggle" @click="router.push('/')">主页</div>
    <LayoutTab class="header-tab"></LayoutTab>
    <div class="header-right"></div>
  </div>
</template>

<script setup lang="ts">
import LayoutTab from './LayoutTab.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
.layout-header {
  box-sizing: border-box;
  display: flex;
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #f5f7fa;

  .menu-toggle {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 16px;
    font-size: 15px;
    white-space: nowrap;
    cursor: pointer;
    background-color: #f5f7fa;

    &:hover {
      background-color: #e6e8eb;
    }
  }

  .el-icon {
    font-size: 18px;
  }

  .header-tab {
    flex: 1;
  }

  .header-right {
    flex: 1;
  }
}
</style>
