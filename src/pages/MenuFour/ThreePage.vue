<template>
  <el-card>
    <el-image :src="imgUrl" :preview-src-list="previewUrl"></el-image>
    <el-button type="primary" @click="handleClickPrintImg"
      >打印logo图片</el-button
    >
  </el-card>

  <el-card style="margin-top: 20px">
    <div id="container">
      <div
        style="
          width: 300px;
          height: 200px;
          margin: 10px;
          border: 1px solid #000;
        "
      >
        <el-row style="margin: 10px 0">
          <el-col :span="12" align="middle">24030100977</el-col>
          <el-col :span="12" align="middle">{{ noWDate }}</el-col>
        </el-row>
        <el-row style="margin: 10px 0">
          <el-col :span="12" align="middle">
            <span style="font-size: 30px">A16-1</span>
          </el-col>
          <el-col :span="12" align="middle">
            <span style="font-size: 25px">香格里拉K</span>
          </el-col>
        </el-row>
        <el-row align="middle">
          <span style=" margin-left: 40px;font-size: 20px">开票: 东聚k</span>
        </el-row>
        <el-row>
          <el-col :span="12"></el-col>
          <el-col :span="12"></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"></el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </div>
    </div>

    <el-button type="primary" @click="printImage"
      >使用domtoimage转为图片打印</el-button
    >

    <el-button @click="handleGetPrinter">获取系统打印设备数量</el-button>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import dayjs from 'dayjs'
import domtoimage from 'dom-to-image'
import getLodop from '@/assets/LodopFuncs.js'

const imgUrl: Ref<string> = ref('logo.jpg')
const previewUrl: Ref<Array<string>> = ref(['logo.jpg'])

const noWDate: string = dayjs(new Date()).format('YY-MM-DD HH:mm:ss')

const handleClickPrintImg = () => {
  // eslint-disable-next-line no-undef
  const lodop = getLodop()
  lodop.SET_PRINTER_INDEX(1);

  // 打开打印窗口
  lodop.PRINT_INIT('打印图片')

  // 添加图片打印项
  lodop.ADD_PRINT_IMAGE(0, 0, '100%', '100%', "<img src='logo.jpg' />")

  // 打印图片
  lodop.PRINT()
}

const printImage = () => {
  domtoimage
    .toPng(document.getElementById('container') as Node)
    .then(result => {
      const img = document.createElement('img')
      img.src = result
      // eslint-disable-next-line no-undef
      var lodop = getLodop()
      lodop.SET_PRINTER_INDEX(2);

      // 打开打印窗口
      lodop.PRINT_INIT('打印图片')

      // 添加图片打印项
      lodop.ADD_PRINT_IMAGE(0, 0, '100%', '100%', `<img src='${result}' />`)

      lodop.PRINT()
    })
    .catch(err => {
      console.log(err)
    })
}


const handleGetPrinter = () => {
	const lodop = getLodop()
	const printCounters: number = lodop.GET_PRINTER_COUNT()
	console.log(printCounters)
}
</script>

<style lang="scss" scoped>
.print-element {
  width: 400px;
  padding: 20px;
  box-shadow:
    0 2px 4px rgb(0 0 0 / 12%),
    0 0 6px rgb(0 0 0 / 4%);
}
</style>
