<template>
  <el-card>
    <el-timeline style="max-width: 600px">
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </el-card>

  <el-card style="margin-top: 20px">
    <el-button type="primary" @click="open = true">Begin Tour</el-button>

    <el-divider />

    <el-space>
      <el-button ref="ref1">Upload</el-button>
      <el-button ref="ref2" type="primary">Save</el-button>
      <el-button ref="ref3" :icon="MoreFilled" />
    </el-space>

    <el-tour v-model="open" type="primary" :mask="false">
      <el-tour-step
        :target="ref1?.$el"
        title="Upload File"
        description="Put you files here."
      />
      <el-tour-step
        :target="ref2?.$el"
        title="Save"
        description="Save your changes"
      />
      <el-tour-step
        :target="ref3?.$el"
        title="Other Actions"
        description="Click to see other"
      />
    </el-tour>
  </el-card>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

import type { ButtonInstance } from 'element-plus'

const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]
const ref1 = ref<ButtonInstance>()
const ref2 = ref<ButtonInstance>()
const ref3 = ref<ButtonInstance>()

const open = ref(false)
</script>
