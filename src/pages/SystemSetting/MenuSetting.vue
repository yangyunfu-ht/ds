<template>
  <div>
    <el-card>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="菜单名称">
          <el-input
            v-model="formInline.user"
            placeholder="请输入菜单名称"
            clearable
          />
        </el-form-item>

        <el-form-item label="菜单路径">
          <el-input
            v-model="formInline.user"
            placeholder="请输入菜单路径"
            clearable
          />
        </el-form-item>

        <el-form-item label="创建时间">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="-"
            start-placeholder="Start date"
            end-placeholder="End date"
          />
        </el-form-item>

        <el-form-item label="缓存页面">
          <el-select v-model="formInline.region" clearable>
            <el-option label="是" :value="1" />
            <el-option label="否" :value="0" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card style="margin-top: 20px">
      <el-row>
        <DsButton type="primary" icon="Plus" @click="handleClick"
          >新增</DsButton
        >
        <DsButton type="warning" icon="Edit">修改</DsButton>
        <DsButton type="danger" icon="Delete">删除</DsButton>
      </el-row>

      <el-table
        :row-style="rowStyle"
        border
        :data="tableData"
        stripe
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column type="selection" align="center"></el-table-column>
        <el-table-column
          type="index"
          label="序号"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column prop="date" label="菜单名称" align="center" />
        <el-table-column prop="name" label="菜单路径" align="center" />
        <el-table-column prop="address" label="创建时间" align="center" />
        <el-table-column prop="address" label="创建人" align="center" />
      </el-table>
    </el-card>

    <el-drawer
      v-model="drawer"
      title="I am the title"
      :close-on-click-modal="false"
    >
      <template #header="{ close, titleId, titleClass }">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <el-button type="danger" @click="close">
          <el-icon class="el-icon--left">
            <CircleCloseFilled />
          </el-icon>
          Close
        </el-button>
      </template>
      <span>Hi there!</span>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import DsButton from '@/components/DsButton.vue'

const value1 = ref<[Date, Date]>([
  new Date(2024, 3, 10, 12, 12, 12),
  new Date(2024, 3, 11, 12, 12, 12),
])

const rowStyle = {
  height: '60px',
}

const drawer = ref<boolean>(false)

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const handleClick = () => {
  drawer.value = true
}

const onSubmit = () => {
  console.log('submit!')
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style lang="scss" scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
