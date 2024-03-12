<template>
  <div class="breadcrumbs-container">
    <div
      class="breadcrumb"
      v-for="({ name, path }, index) of breadcrumbs"
      :key="index"
      @click="handleClick(name, path)"
    >
      {{ name }}
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const breadcrumbs = []

console.log(router)

const handleClick = (name, path) => {
  console.log(name, path)
}
</script>

<style lang="scss" scope>
.breadcrumbs-container {
  display: flex;
  width: 1500px;
  height: 100%;
  padding: 0 16px;

  & .breadcrumb {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    background-color: #f2f6fc;
    border-left: 1px solid #e4e7ed;
  }
}
</style>
