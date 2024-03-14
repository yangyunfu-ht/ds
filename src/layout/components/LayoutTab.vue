<template>
	<div class="layout-tab">
		<div class="left-tab">
			<div class="main-tab" @click="goHome">
				<span>主页{{ startIndex }}</span>
			</div>
			<div class="main-tab" style="width:30px" @click="previous">
				<el-tooltip class="box-item" effect="dark" content="上一页" placement="bottom">
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
			<div class="refresh-tab" style="width:30px" @click="next">
				<el-tooltip class="box-item" effect="dark" content="下一页" placement="bottom">
					<el-icon>
						<ArrowRight />
					</el-icon>
				</el-tooltip>
			</div>
			<div class="refresh-tab" @click="refresh">
				<el-tooltip class="box-item" effect="dark" content="刷新当前页" placement="bottom">
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
	if(startIndex.value === 0) return
	startIndex.value -= 1
	tabWrapper.value?.scrollTo({
		top: 0,
		left: -100,
		behavior: 'smooth'
	})
	console.log(document.getElementsByClassName('middle-tab')[0].scrollLeft)
}
const next = () => {
	tabWrapper.value?.scrollTo({
		top: 0,
		left: 100 * startIndex.value,
		behavior: 'smooth'
	})
	startIndex.value += 1
	console.log(document.getElementsByClassName('middle-tab')[0].scrollLeft)
}
</script>

<style lang="scss" scoped>
.layout-tab {
	height: 40px;
	display: flex;
	overflow-x: scroll;

	.left-tab {
		display: flex;

		.main-tab {
			width: 70px;
			line-height: 40px;
			text-align: center;
			background-color: #F5F7FA;
			cursor: pointer;
			margin: 2px 5px 2px 0;
		}

		.main-tab:hover {
			background-color: #E6E8EB;
		}
	}


	.middle-tab {
		flex: 1;
		display: flex;
		overflow-x: hidden;
		cursor: pointer;
		transition: all 2s ease-in-out;

		.tab {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-shrink: 0;
			background-color: #F0F2F5;
			margin: 2px 10px 2px 2px;
			padding: 0 20px;
			user-select: none;
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
			width: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #F5F7FA;
			cursor: pointer;
			margin: 2px 0 2px 5px;
		}

		.refresh-tab:hover {
			background-color: #E6E8EB;
		}
	}


}
</style>
