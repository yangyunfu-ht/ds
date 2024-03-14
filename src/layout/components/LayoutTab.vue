<template>
  <div class="layout-tab">
    <div class="left-tab">
      <div class="main-tab" @click="goHome">
        <span>主页{{ startIndex }}</span>
      </div>
      <div class="main-tab" style="width: 30px" @click="previous">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="上一页"
          placement="bottom"
        >
          <el-icon>
            <ArrowLeft />
          </el-icon>
        </el-tooltip>
      </div>
    </div>
    <section class="middle-tab" ref="tabWrapper">
      <div class="tab" v-for="item of 50" :key="item">{{ item }}</div>
    </section>
    <div class="right-tab">
      <div class="refresh-tab" style="width: 30px" @click="next">
        <el-tooltip
          class="box-item"
          effect="dark"
          content="下一页"
          placement="bottom"
        >
          <el-icon>
            <ArrowRight />
          </el-icon>
        </el-tooltip>
      </div>
      <div class="refresh-tab" @click="refresh">
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
const startIndex = ref<number>(0)
const tabWrapper = ref<HTMLDivElement | null>(null)

const refresh = () => router.go(0)
const goHome = () => router.push('/')

const previous = () => {
  if (startIndex.value === 0) return
  startIndex.value -= 1
  tabWrapper.value?.scrollTo({
    top: 0,
    left: -100,
    behavior: 'smooth',
  })
  console.log(document.getElementsByClassName('middle-tab')[0].scrollLeft)
}
const next = () => {
  tabWrapper.value?.scrollTo({
    top: 0,
    left: 100 * startIndex.value,
    behavior: 'smooth',
  })
  startIndex.value += 1
  console.log(document.getElementsByClassName('middle-tab')[0].scrollLeft)
}
</script>

<style lang="scss" scoped>
.layout-tab {
  display: flex;
  height: 40px;
  overflow-x: scroll;

  .left-tab {
    display: flex;

    .main-tab {
      width: 70px;
      margin: 2px 5px 2px 0;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      background-color: #f5f7fa;
    }

    .main-tab:hover {
      background-color: #e6e8eb;
    }
  }

  .middle-tab {
    display: flex;
    flex: 1;
    overflow-x: hidden;
    cursor: pointer;
    transition: all 2s ease-in-out;

    .tab {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      margin: 2px 10px 2px 2px;
      user-select: none;
      background-color: #f0f2f5;
      border-radius: 4px;

      .tab:hover {
        background-color: #000;
      }
    }
  }

  .right-tab {
    display: flex;
    justify-content: space-around;

    .refresh-tab {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      margin: 2px 0 2px 5px;
      cursor: pointer;
      background-color: #f5f7fa;
    }

    .refresh-tab:hover {
      background-color: #e6e8eb;
    }
  }
}
</style>
