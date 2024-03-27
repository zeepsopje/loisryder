<script>
	import { fade } from "svelte/transition";
	import { Layout, Menu } from '$lib';

	export let menuItems = [];

	let menuOpened = false;
</script>

<div class="navbar">
	<a class="logo" href="/">Lois<br/>Ryder</a>
	<div
		class="menu"
	>
		<img
			width="46"
			src="/menu-icon.png"
			on:click={() => menuOpened = true}
		/>
	</div>
	{#if menuOpened}
		<Menu items={menuItems} on:close={() => menuOpened = false} />
	{/if}
</div>

<style lang="scss">
	.navbar {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		padding: $page-margin 40px 0;
		user-select: none;

		.logo, .menu {
			mix-blend-mode: difference;
		}

		@media (max-width: $breakpoint-mobile) {
			padding: $page-margin-mobile $page-margin-mobile 0;
			align-items: center;
			.menu {
				margin-top: 10px;
			}
		}
	}

	.logo {
		line-height: 0.79;
		font-size: 36px;
		color: #fff;
		font-family: $heading-font;
		position: relative;
		z-index: 3;
		text-decoration: none;
	}

	.menu {
		text-align: right;
	}

	.menu img {
		cursor: pointer;
		padding-bottom: 10px;
	}
</style>
