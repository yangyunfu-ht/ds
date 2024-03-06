<template>
	<el-card>
		<el-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="openFullScreen1">
			As a directive
		</el-button>
		<el-button type="primary" @click="openFullScreen2"> As a service </el-button>
	</el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElLoading } from 'element-plus'

const fullscreenLoading = ref(false)
const openFullScreen1 = () => {
	fullscreenLoading.value = true
	setTimeout(() => {
		fullscreenLoading.value = false
	}, 2000)
}

const openFullScreen2 = () => {
	const loading = ElLoading.service({
		lock: true,
		text: 'Loading',
		background: 'rgba(255, 255, 255, 0.7)',
		target: document.getElementsByClassName('main-content')[0] as HTMLElement
	})
	setTimeout(() => {
		loading.close()
	}, 2000)
}
</script>
