<template>
  <el-card style="height: 80%">
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <el-radio-button value="top">top</el-radio-button>
      <el-radio-button value="right">right</el-radio-button>
      <el-radio-button value="bottom">bottom</el-radio-button>
      <el-radio-button value="left">left</el-radio-button>
    </el-radio-group>

    <el-tabs
      :tab-position="tabPosition"
      style="height: 200px"
      class="demo-tabs"
    >
      <el-tab-pane label="User">User</el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue'

const tabPosition: Ref<'left' | 'top' | 'bottom' | 'right'> = ref('left')
</script>
