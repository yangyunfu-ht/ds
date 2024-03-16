<template>
  <div class="layout-tab">
    <div class="left-tab">
      <div
        class="left-arrow-tab tab"
        style="padding: 0 12px; margin-right: 5px"
        @click="previous"
      >
        <el-icon>
          <ArrowLeft />
        </el-icon>
      </div>
    </div>
    <section class="middle-tab" ref="tabWrapper" @scroll="scroll">
      <div
        class="tab"
        v-for="({ name, path }, index) of tabs"
        :key="index"
        :class="{ activeTab: route.path === path }"
      >
        <div
          class="center"
          style="margin-right: 8px"
          @click="router.push(path)"
        >
          {{ name }}
        </div>
        <div class="center close" @click="useTabsStore.removeTab(path)">
          <el-icon :size="12">
            <Close />
          </el-icon>
        </div>
      </div>
    </section>
    <div class="right-tab">
      <div
        class="right-arrow-tab tab"
        style="padding: 0 12px; margin-left: 5px"
        @click="next"
      >
        <el-icon>
          <ArrowRight />
        </el-icon>
      </div>
      <div
        class="refresh-tab tab"
        style="padding: 0 20px; margin-right: 0"
        @click="refresh"
      >
        <el-tooltip
          class="box-item"
          effect="dark"
          content="刷新当前页"
          placement="bottom"
        >
          <el-icon>
            <Refresh />
          </el-icon>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { useTabs } from '@/store/useTabs'
import { storeToRefs } from 'pinia'

const useTabsStore = useTabs()
const { tabs } = storeToRefs(useTabsStore)

const route = useRoute()
watch(route, newRoute => {
  const { name, path } = newRoute
  useTabsStore.addTab(name as string, path)
})

const router = useRouter()
const tabWrapper = ref<HTMLDivElement | null>(null)

const refresh = () => router.go(0)
const previous = () =>
  ((
    document.getElementsByClassName('middle-tab')[0] as HTMLDivElement
  ).scrollLeft =
    (document.getElementsByClassName('middle-tab')[0] as HTMLDivElement)
      .scrollLeft - 88)

const next = () =>
  ((
    document.getElementsByClassName('middle-tab')[0] as HTMLDivElement
  ).scrollLeft =
    (document.getElementsByClassName('middle-tab')[0] as HTMLDivElement)
      .scrollLeft + 99)

const scroll = (e: UIEvent) => {
  console.log((e.target as HTMLDivElement).scrollLeft)
}
</script>

<style lang="scss" scoped>
.layout-tab {
  box-sizing: border-box;
  display: flex;
  padding: 4px 0 0;
  overflow-x: scroll;

  .tab {
    box-sizing: border-box;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-right: 10px;
    font-size: 13px;
    color: #606266;
    white-space: nowrap;
    cursor: pointer;
    background-color: #f5f7fa;
    border-radius: 4px;
  }

  .tab:hover {
    background-color: #ebeef5;
    transition: all 0.1s ease-in-out;
    transform: scale(1.01);
  }

  .activeTab {
    color: var(--el-menu-active-color);
    // border-radius: 0;
    // border-top-left-radius: 4px;
    // border-top-right-radius: 4px;
  }

  .main-tab {
    padding: 8px 24px;
    margin-right: 0;
    background-color: #ebeef5;
  }

  .left-tab {
    display: flex;
    justify-content: space-between;
  }

  .middle-tab {
    display: flex;
    flex: 1;
    overflow-x: scroll;
    cursor: pointer;
    transition: all 2s ease-in-out;
  }

  .middle-tab::-webkit-scrollbar {
    display: none;
  }

  .right-tab {
    display: flex;
    justify-content: space-around;
  }
}

.layout-tab::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
