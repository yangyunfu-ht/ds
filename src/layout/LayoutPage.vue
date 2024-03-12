<template>
	<section class="layout">
		<aside class="layout-menu">
			<LayoutAside></LayoutAside>
		</aside>
		<main class="layout-main">
			<header class="layout-main-header"></header>
				<main style="margin: 12px;">
					<router-view></router-view>
				</main>
		</main>
	</section>
</template>

<script setup lang="ts">
import LayoutAside from './components/LayoutAside.tsx'
</script>

<style scoped lang="scss">
.layout {
	height: 100%;
	display: flex;
	background-color: #F2F6FC;

	& .layout-menu {
		width: 250px;
		background-color: #fff;
		box-sizing: border-box;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .22), 0 0 6px rgba(0, 0, 0, .14)
	}

	& .layout-main {
		flex: 1;

		& .layout-main-header {
			height: 50px;
			background-color: #fff;
			box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
		}
	}
}
</style>
