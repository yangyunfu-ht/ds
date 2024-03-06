<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px" style="background-color: #909399">
        <layout-aside></layout-aside>
      </el-aside>
      <section class="section">
        <el-header height="50px" style="background-color: #f0f2f5">
          <el-avatar
            :size="40"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        /></el-header>
        <section class="main-content">
          <router-view v-slot="{ Component }">
            <transition name="">
              <component :is="Component" />
            </transition>
          </router-view>
        </section>
      </section>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LayoutAside from './components/LayoutAside.vue'
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;

  .el-container {
    height: 100%;

    .section {
      box-sizing: border-box;
      display: block;
      flex: 1;
      flex-basis: auto;
      padding: var(--el-main-padding);
      overflow: auto;
      -el-main-padding: 20px;

      .el-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      .main-content {
        box-sizing: border-box;
        height: calc(100% - 50px);
        padding: 12px;
      }
    }
  }
}
</style>
