<template>
  <div class="layout-tab">
    <div class="left-tab">
      <div
        class="left-arrow-tab tab"
        style="padding: 0 12px; margin: 0 5px"
        @click="previous"
      >
        <el-icon>
          <ArrowLeft />
        </el-icon>
      </div>
    </div>
    <section class="middle-tab" ref="tabWrapper" @scroll="scroll">
      <div class="tab" v-for="(item, index) of tabs" :key="index">
        <div class="center" style="margin-right: 8px">
          {{ item }}
        </div>
        <div class="center close" @click="close(index)">
          <el-icon :size="12">
            <Close />
          </el-icon>
        </div>
      </div>
    </section>
    <div class="right-tab">
      <div
        class="right-arrow-tab tab"
        style="padding: 0 12px; margin: 0 5px"
        @click="next"
      >
        <el-icon>
          <ArrowRight />
        </el-icon>
      </div>
      <div class="refresh-tab tab" style="padding: 0 20px" @click="refresh">
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
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const tabWrapper = ref<HTMLDivElement | null>(null)

const refresh = () => router.go(0)
const tabs = ref<Array<string>>([])
const close = (index: number) => {
  tabs.value.splice(index, 1)
}
const previous = () => {
  (
    document.getElementsByClassName('middle-tab')[0] as HTMLDivElement
  ).scrollLeft =
    (document.getElementsByClassName('middle-tab')[0] as HTMLDivElement)
      .scrollLeft - 88
}
const next = () => {
  (
    document.getElementsByClassName('middle-tab')[0] as HTMLDivElement
  ).scrollLeft =
    (document.getElementsByClassName('middle-tab')[0] as HTMLDivElement)
      .scrollLeft + 88
}

const scroll = (e: UIEvent) => {
  console.log((e.target as HTMLDivElement).scrollLeft)
}
</script>

<style lang="scss" scoped>
.layout-tab {
  box-sizing: border-box;
  display: flex;
  //   padding: 4px 2px;
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
    transform: scale(1.02);
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
