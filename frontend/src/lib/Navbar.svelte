<script>
	import { fade } from "svelte/transition";

	export let menuOpened = false;

	let scrollY = null;
</script>

<svelte:window bind:scrollY />

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
</div>
<div class="bg" class:show={scrollY > 550}></div>

<style lang="scss">
	.bg {
		width: 100%;
		height: 100px;
		background-color: $bg-color;
		top: 0;
		left: 0;
		position: fixed;
		opacity: 0;
		transition: all .2s ease-in-out;

		@media (max-width: $breakpoint-mobile) {
			&.show {
				opacity: 1;
			}
		}
	}

	.navbar {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		padding: $page-margin 40px 0;
		user-select: none;
		z-index: 100;
		mix-blend-mode: difference;

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
