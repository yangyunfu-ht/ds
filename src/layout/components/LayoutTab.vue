<template>
  <ul class="tabs border" :style="{ width: tabWidth }">
    <li class="tab" @click="router.push('/')">
      <img class="logo" src="/logo.jpg" :style="{ width: tabWidth }" alt="" />
    </li>
    <li
      v-for="({ icon, label }, index) in tabs"
      :key="index"
      class="tab"
      @click="(e: MouseEvent) => handleChangeTab(e, index)"
    >
      <render-icon :icon="icon" :size="22" />
      {{ label }}
    </li>
    <div
      class="tab-line"
      :style="{ height: tabHeight, transform: `translateY(${translateY})` }"
    ></div>
  </ul>
</template>

<script setup lang="ts">
import { toRefs, computed, ref } from 'vue'
import RenderIcon from '@/components/RenderIcon'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Tab {
  label: string
  icon: string
}
interface Props {
  tabs?: Array<Tab>
  width?: number
}

const props = withDefaults(defineProps<Props>(), {
  tabs: () => [
    {
      icon: 'Grid',
      label: '运营',
    },
    {
      icon: 'ChatLineSquare',
      label: '财务',
    },
    {
      icon: 'Operation',
      label: '品控',
    },
    {
      icon: 'HelpFilled',
      label: '报表',
    },
    {
      icon: 'Van',
      label: '车辆',
    },
    {
      icon: 'Histogram',
      label: '账户',
    },
    {
      icon: 'Setting',
      label: '系统',
    },
  ],
  width: 70,
})

const { tabs, width } = toRefs(props)

const scrollY = ref<number>(0)
const currentTab = ref<number>(0)
const activeTabHeight = ref<number>(0)

const emits = defineEmits<{
  (e: 'change', value: number, tab: Tab): void
}>()

const handleChangeTab = (e: MouseEvent, index: number) => {
  currentTab.value = index
  scrollY.value = (e.target as HTMLDivElement).offsetTop
  activeTabHeight.value = (
    e.target as HTMLDivElement
  ).getBoundingClientRect().height
  emits('change', currentTab.value, tabs.value[currentTab.value])
}

const translateY = computed(() => {
  return scrollY.value + 'px'
})

const tabHeight = computed(() => {
  return activeTabHeight.value + 'px'
})

const tabWidth = computed(() => {
  return width.value + 'px'
})
</script>

<style lang="scss" scoped>
.tabs {
  position: relative;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  scrollbar-width: none;

  .tab {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    margin: 10px 0;
    font-size: var(--el-menu-item-font-size);
    list-style: none;
    cursor: pointer;

    .el-icon {
      padding-bottom: 12px;
      pointer-events: none;
    }
  }

  .tab:not(:first-child):hover {
    color: var(--el-menu-active-color);
    background-color: var(--el-menu-hover-bg-color);
  }

  // .tab:hover {
  //   color: var(--el-menu-active-color);
  //   background-color: var(--el-menu-hover-bg-color);
  // }

  .tab-line {
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    background-color: var(--el-menu-active-color);
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
}

.border {
  border-right: 2px solid #f5f5f5;
}
</style>
