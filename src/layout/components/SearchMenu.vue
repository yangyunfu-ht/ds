<template>
  <div class="searchMenu">
    <el-autocomplete
      style="width: 90%"
      v-model="state"
      fit-input-width
      highlight-first-item
      :fetch-suggestions="querySearchAsync"
      placeholder="输入功能名称搜索"
      @select="handleSelect"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// import { routes, MenuItem } from '@/utils/MenuData.ts'
// import { flatArray } from '@/utils/array';

const state = ref('')

interface LinkItem {
  value: string
  link: string
}

const links = ref<LinkItem[]>([])

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}

let timeout: ReturnType<typeof setTimeout>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 100 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSelect = (item: Record<string, any>) => {
  console.log(item)
}

onMounted(() => {
  links.value = loadAll()
})
</script>

<style lang="scss" scoped>
.searchMenu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  :deep(.el-input__wrapper) {
    border-radius: 20px;
  }
}
</style>
