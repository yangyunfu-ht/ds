<template>
  <header class="layout-header">
    <div class="toggle-collapse" @click="useCollapse.toggle">
      <el-icon :size="20" v-if="isCollapse"><Fold /></el-icon>
      <el-icon :size="20" v-else><Expand /></el-icon>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCollapseStore } from '@/store/useCollapse'
import { storeToRefs } from 'pinia'

const useCollapse = useCollapseStore()

const { isCollapse } = storeToRefs(useCollapse)
</script>

<style lang="scss" scoped>
.layout-header {
  box-sizing: border-box;
  display: flex;
  height: 50px;
  padding: 0 8px;
  margin-bottom: 10px;
  background-color: #fff;
  border-bottom: 1px solid #f5f7fa;
  border-radius: 4px;

  .toggle-collapse {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .el-icon {
      pointer-events: none;
    }
  }
}
</style>
