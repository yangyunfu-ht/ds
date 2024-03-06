<template>
  <el-menu
    router
    :default-active="defaultActive"
    unique-opened
    class="el-menu-vertical-demo"
  >
    <!-- :default-openeds="defaultOpeneds" -->
    <el-menu-item index="/">
      <el-icon>
        <el-icon>
          <House />
        </el-icon>
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>

    <el-sub-menu index="1">
      <template #title>
        <el-icon>
          <icon-menu />
        </el-icon>
        <span>菜单一</span>
      </template>
      <el-menu-item index="/1">表格</el-menu-item>
      <el-menu-item index="/1-2">日历</el-menu-item>
      <el-sub-menu index="/1-3-1">
        <template #title><span>信息</span></template>
        <el-menu-item index="/1-3-1">信息描述</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>菜单二</span>
      </template>
      <el-menu-item index="/2">抽屉</el-menu-item>
      <el-menu-item index="/2-2">提示框</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <document />
        </el-icon>
        <span> 菜单三 </span>
      </template>
      <el-menu-item index="/3">标签页</el-menu-item>
      <el-menu-item index="/3-2">3时间线-漫游引导</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="4">
      <template #title>
        <el-icon>
          <setting />
        </el-icon>
        <span> 菜单四 </span>
      </template>
      <el-menu-item index="/4">加载</el-menu-item>
      <el-menu-item index="/4-2">水印指令</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {
  House,
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import type { Ref } from 'vue'
import { useRoute } from 'vue-router'

const defaultActive: Ref<string> = ref('/')
// const defaultOpeneds: Ref<Array<string>> = ref(['1'])
const router = useRoute()

watch(
  () => router.path,
  (path: string) => {
    defaultActive.value = path
  }
)
</script>

<style>
.el-menu {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #e4e7ed;
}
</style>
