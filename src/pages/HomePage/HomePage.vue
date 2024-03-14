<template>
  <el-row :gutter="12">
    <el-col :span="12">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>Card name</span>
						<el-button>{{ count }}</el-button>
						<el-button @click="counter.increment">increment</el-button>
          </div>
        </template>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>

        <template #footer>Footer content</template>
      </el-card>
    </el-col>

    <el-col :span="12">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>Card name</span>
          </div>
        </template>
        <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>

        <template #footer>Footer content</template>
      </el-card>
    </el-col>
  </el-row>

  <el-card style="margin: 20px 0">
    <div class="page">
      <el-button
        v-for="({ type, content }, index) of ButtonConfig"
        :key="index"
        :type="type"
        @click="handleClickButton(type, index)"
        >{{ content }}</el-button
      >
      <el-select
        v-model="value"
        placeholder="请选择提示类型"
        size="large"
        clearable
        style="width: 240px; margin-left: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </el-card>
  <el-card style="margin: 20px 0">
    <div class="page">
      <el-button
        v-for="({ type, content }, index) of ButtonConfig"
        :key="index"
        :type="type"
        @click="handleClickButton(type, index)"
        >{{ content }}</el-button
      >
      <el-select
        v-model="value"
        placeholder="请选择提示类型"
        size="large"
        clearable
        style="width: 240px; margin-left: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </el-card>
  <el-card style="margin: 20px 0">
    <div class="page">
      <el-button
        v-for="({ type, content }, index) of ButtonConfig"
        :key="index"
        :type="type"
        @click="handleClickButton(type, index)"
        >{{ content }}</el-button
      >
      <el-select
        v-model="value"
        placeholder="请选择提示类型"
        size="large"
        clearable
        style="width: 240px; margin-left: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </el-card>
  <el-card style="margin: 20px 0">
    <div class="page">
      <el-button
        v-for="({ type, content }, index) of ButtonConfig"
        :key="index"
        :type="type"
        @click="handleClickButton(type, index)"
        >{{ content }}</el-button
      >
      <el-select
        v-model="value"
        placeholder="请选择提示类型"
        size="large"
        clearable
        style="width: 240px; margin-left: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </el-card>
  <el-card style="margin: 20px 0">
    <div class="page">
      <el-button
        v-for="({ type, content }, index) of ButtonConfig"
        :key="index"
        :type="type"
        @click="handleClickButton(type, index)"
        >{{ content }}</el-button
      >
      <el-select
        v-model="value"
        placeholder="请选择提示类型"
        size="large"
        clearable
        style="width: 240px; margin-left: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </el-card>
  <el-card style="margin: 20px 0">
    <div class="page">
      <el-button
        v-for="({ type, content }, index) of ButtonConfig"
        :key="index"
        :type="type"
        @click="handleClickButton(type, index)"
        >{{ content }}</el-button
      >
      <el-select
        v-model="value"
        placeholder="请选择提示类型"
        size="large"
        clearable
        style="width: 240px; margin-left: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </el-card>
  <el-card style="margin: 20px 0">
    <div class="page">
      <el-button
        v-for="({ type, content }, index) of ButtonConfig"
        :key="index"
        :type="type"
        @click="handleClickButton(type, index)"
        >{{ content }}</el-button
      >
      <el-select
        v-model="value"
        placeholder="请选择提示类型"
        size="large"
        clearable
        style="width: 240px; margin-left: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </el-card>
  <el-card style="margin: 20px 0">
    <div class="page">
      <el-button
        v-for="({ type, content }, index) of ButtonConfig"
        :key="index"
        :type="type"
        @click="handleClickButton(type, index)"
        >{{ content }}</el-button
      >
      <el-select
        v-model="value"
        placeholder="请选择提示类型"
        size="large"
        clearable
        style="width: 240px; margin-left: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </el-card>
  <el-card style="margin: 20px 0">
    <div class="page">
      <el-button
        v-for="({ type, content }, index) of ButtonConfig"
        :key="index"
        :type="type"
        @click="handleClickButton(type, index)"
        >{{ content }}</el-button
      >
      <el-select
        v-model="value"
        placeholder="请选择提示类型"
        size="large"
        clearable
        style="width: 240px; margin-left: 100px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </el-card>

  <el-card style="margin-top: 20px">
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
  </el-card>
  <el-card style="margin-top: 20px">
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
  </el-card>
  <el-card style="margin-top: 20px">
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
  </el-card>
  <el-card style="margin-top: 20px">
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
  </el-card>
  <el-card style="margin-top: 20px">
    <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
  </el-card>
</template>

<script setup lang="ts">
import { reactive, ref, h } from 'vue'
import type { Ref } from 'vue'
import { ElMessage, ElNotification } from 'element-plus'
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';

const counter = useCounterStore()

const { count } = storeToRefs(counter)

interface ButtonConfig1 {
  content: string
  type:
    | ''
    | 'default'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'text'
}

const ButtonConfig: Array<ButtonConfig1> = reactive([
  {
    type: '',
    content: 'Default',
  },
  {
    type: 'primary',
    content: 'Primary',
  },
  {
    type: 'success',
    content: 'Success',
  },
  {
    type: 'info',
    content: 'Info',
  },
  {
    type: 'warning',
    content: 'Warning',
  },
  {
    type: 'danger',
    content: 'Danger',
  },
])

interface MessageConfig {
  label: string
  value: number
}
const options: Array<MessageConfig> = reactive([
  {
    label: '消息提示',
    value: 1,
  },
  {
    label: '消息通知',
    value: 2,
  },
])

const value: Ref<number> = ref(1)

const handleClickButton = (_type: string, index: number) => {
  value.value === 1
    ? ElMessage(`点击了第${index + 1}个按钮`)
    : ElNotification({
        title: '提示',
        message: h(
          'span',
          { style: 'color: green' },
          `点击了第${index + 1}个按钮`
        ),
      })
}
</script>

<!-- <style lang="scss" scoped></style> -->
