<template>
  <div class="mb-4">
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
</template>

<script setup lang="ts">
import { reactive, ref, h } from "vue";
import type { Ref } from "vue";
import { ElMessage, ElNotification } from "element-plus";

interface ButtonConfig1 {
  content: string;
  type:
    | ""
    | "default"
    | "primary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "text";
}

const ButtonConfig: Array<ButtonConfig1> = reactive([
  {
    type: "",
    content: "Default",
  },
  {
    type: "primary",
    content: "Primary",
  },
  {
    type: "success",
    content: "Success",
  },
  {
    type: "info",
    content: "Info",
  },
  {
    type: "warning",
    content: "Warning",
  },
  {
    type: "danger",
    content: "Danger",
  },
]);

interface MessageConfig {
  label: string;
  value: number;
}
const options: Array<MessageConfig> = reactive([
  {
    label: "消息提示",
    value: 1,
  },
  {
    label: "消息通知",
    value: 2,
  },
]);

const value: Ref<number> = ref(1);

const handleClickButton = (type: string, index: number) => {
  value.value === 1
    ? ElMessage(`点击了第${index + 1}个按钮`)
    : ElNotification({
        title: "提示",
        message: h(
          "span",
          { style: "color: green" },
          `点击了第${index + 1}个按钮`,
        ),
      });
};
</script>

<style lang="scss" scoped></style>
