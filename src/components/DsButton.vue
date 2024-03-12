<template>
  <el-button :type="props.type">
    <template #icon v-if="icon">
      <UseIcon :icon="props.icon"></UseIcon>
    </template>
    <slot name="default"></slot>
  </el-button>
</template>

<script setup lang="ts">
import { EpPropMergeType } from 'element-plus/es/utils/index.mjs'
import UseIcon from './UseIcon.tsx'

interface Props {
  type?:
    | EpPropMergeType<
        StringConstructor,
        | ''
        | 'default'
        | 'success'
        | 'text'
        | 'warning'
        | 'info'
        | 'primary'
        | 'danger',
        unknown
      >
    | undefined
  icon?:
    | 'Plus'
    | 'Delete'
    | 'Edit'
    | 'Search'
    | 'ZoomIn'
    | 'ZoomOut'
    | 'Share'
    | 'Location'
    | 'Printer'
    | 'DocumentCopy'
    | 'DownLoad'
    | 'Refresh'
    | ''
}

const props = withDefaults(defineProps<Props>(), {
  type: '',
  icon: '',
})
</script>
