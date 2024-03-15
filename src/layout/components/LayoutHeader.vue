<template>
  <div class="layout-header">
    <div class="menu-toggle" @click="router.push('/')">主页</div>
    <LayoutTab style="min-width: 1000px"></LayoutTab>
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
    width: 100px;
    height: 100%;
    font-size: 15px;
    cursor: pointer;
    background-color: #f5f7fa;

    &:hover {
      background-color: #e6e8eb;
    }
  }

  .el-icon {
    font-size: 18px;
  }
}
</style>
