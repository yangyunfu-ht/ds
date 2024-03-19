<template>
  <aside class="layout-aside">
    <LayoutTab :width="tabWidth" @change="changeTab" />
    <section
      class="layout-menu"
      :style="{ width: isCollapse ? 0 : menuWidthValue }"
    >
      <header
        class="layout-menu-header"
        :style="{ width: isCollapse ? 0 : menuWidthValue }"
      >
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入关键词搜索"
          @select="handleSelect"
        />
      </header>
      <main class="layout-menu-content">
        <el-menu router>
          <render-menu :menus="menus" />
        </el-menu>
      </main>
    </section>
  </aside>
</template>

<script lang="ts" setup>
import { ref, toRefs, computed, onMounted } from 'vue'
import RenderMenu from './RenderMenu'
import LayoutTab from './LayoutTab.vue'
import { routes } from '@/utils/MenuData'
import { useCollapseStore } from '@/store/useCollapse'
import { storeToRefs } from 'pinia'

interface Props {
  tabWidth?: number
  menuWidth?: number
}
interface LinkItem {
  value: string
  link: string
}

const useCollapse = useCollapseStore()

const { isCollapse } = storeToRefs(useCollapse)

const state = ref('')
const links = ref<LinkItem[]>([])

const props = withDefaults(defineProps<Props>(), {
  tabWidth: 100,
  menuWidth: 180,
})

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
const querySearchAsync = (
  queryString: string,
  cb: (arg: Array<{ value: string; link: string }>) => void
) => {
  const results = queryString
    ? links.value.filter(createFilter(queryString))
    : links.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item: Record<string, string>) => {
  console.log(item)
}

onMounted(() => {
  links.value = loadAll()
})

const { tabWidth, menuWidth } = toRefs(props)
const menus = ref(routes)

const changeTab = (index: number) => {
  console.log(index)
}

const menuWidthValue = computed(() => {
  return menuWidth.value + 'px'
})
</script>

<style lang="scss" scoped>
.layout-aside {
  display: flex;
  height: 100%;
  overflow-y: hidden;
  background-color: #fff;
  border-radius: 4px;

  .layout-menu {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;
    transition: width 0.4s;

    .layout-menu-header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90px;
      transition: width 0.4s;

      :deep(.el-input__wrapper) {
        border-radius: 20px;
      }
    }

    .layout-menu-content {
      height: calc(100% - 90px);

      .el-menu {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        scrollbar-width: none;
      }
    }
  }
}

:deep(.el-menu) {
  border-right: none;
}

:deep(.el-menu--collapse) {
  width: 0;
}

:deep(.el-menu--collapse .el-sub-menu) {
  display: none;
  width: 0;
  height: 0;
}

:deep(.el-menu--collapse .el-menu-item) {
  display: none;
  width: 0;
  height: 0;
}
</style>
