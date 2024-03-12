<template>
	<div class="breadcrumbs-container">
		<div class="breadcrumb" v-for="({ name, path }, index) of breadcrumbs" :key="index"
			@click="handleClick(name, path)">{{ name }}</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const breadcrumbs = []

console.log(router)


const handleClick = (name, path) => {
	console.log(name, path);
}
</script>


<style lang="scss" scope>
.breadcrumbs-container {
	height: 100%;
	width: 1500px;
	display: flex;
	padding: 0 16px;

	& .breadcrumb {
		height: 100%;
		width: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 14px;
		box-sizing: border-box;
		background-color: #F2F6FC;
		border-left: 1px solid #E4E7ED;
		user-select: none;
		cursor: pointer;
	}
}
</style>
