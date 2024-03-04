<template>
  <el-watermark
    :content="['得胜物流']"
    :zIndex="10000"
    :gap="[200, 200]"
    :font="font"
    style="height: 100%"
  >
    <router-view></router-view>
  </el-watermark>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const font = reactive({
  // color: 'rgba(255, 255, 255, .5)',
});
</script>

<style lang="scss" scoped></style>
