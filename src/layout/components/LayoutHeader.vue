<template>
  <div class="layout-header">
    <div class="menu-toggle">主页</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout-header {
  box-sizing: border-box;
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
