<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="250px" style="background-color: #909399">
        <layout-aside></layout-aside>
      </el-aside>
      <section class="section">
        <el-header height="50px" style="background-color: #f0f2f5"
          >header</el-header
        >
        <section class="main-content">
          <router-view></router-view>
        </section>
      </section>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import LayoutAside from "./components/LayoutAside.vue";
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;

  .el-container {
    height: 100%;

    .section {
      -el-main-padding: 20px;
      display: block;
      flex: 1;
      flex-basis: auto;
      overflow: auto;
      box-sizing: border-box;
      padding: var(--el-main-padding);

      .main-content {
        height: calc(100% - 50px);
      }
    }
  }
}
</style>
