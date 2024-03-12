<template>
  <el-table
    border
    :data="tableData"
    stripe
    style="width: 100%"
    @sort-change="sortChange"
  >
    <el-table-column type="selection" width="55" align="center">
    </el-table-column>
    <el-table-column
      type="index"
      label="序号"
      width="55"
      align="center"
      sortable
    >
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180"
      align="center"
      sortable
    >
      <template #default="{ row }">
        <span>{{ row.name }} is years old.</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
      align="center"
      sortable
    >
    </el-table-column>
    <el-table-column prop="address" label="地址" align="center" sortable>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
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

const sortChange = (props: { prop: string }) => {
  console.log(props.prop)
  ElMessage({
    type: 'success',
    message: `对${props.prop}字段进行排序`,
  })
}
</script>
