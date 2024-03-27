<script>
	import { scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let image;

	let loaded = false;

	onMount(() => {
		loaded = true;
	});
</script>

<div
	class="header"
>
	{#if loaded}
		<div
			class="bg"
			style:background-image="url({image})"
		>
		</div>
	{/if}
	<h1>Lois<br/>Ryder</h1>
</div>

<style lang="scss">
	.header {
		width: 100%;
		height: 100vh;
		background-color: black;
		z-index: -1;
		display: grid;
		place-items: center center;
		position: relative;
	}

	.bg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		background-color: black;
	}

	h1 {
		color: #fff;
		text-align: center;
		line-height: 0.79;
		font-size: 250px;
		user-select: none;
		margin-bottom: 0;

		@media (max-width: $breakpoint-tablet) {
			font-size: 170px;
		}

		@media (max-width: $breakpoint-mobile) {
			font-size: 150px;
		}

		@media (max-width: 690px) {
			font-size: 140px;
		}

		@media (max-width: 410px) {
			font-size: 120px;
		}
	}
</style>
