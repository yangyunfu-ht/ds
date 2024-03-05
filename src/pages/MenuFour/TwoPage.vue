<template>
  <div
    v-watermark="watermarkConfig"
    style="width: 300px; height: 300px; background-color: #fff"
  >
    4-2
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const watermarkConfig = reactive({
  text: 'lucky 1234',
  color: 'rgba(0, 0, 0, 0.3)',
  width: 140,
  height: 80,
})
</script>

<!-- <style scoped></style> -->
