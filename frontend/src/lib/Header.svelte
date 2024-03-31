<script>
	import { scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let image;
</script>

<div
	class="header"
>
	<div
		class="bg"
		style:background-image="url({image})"
	>
	</div>
	{#key loaded}
		<h1>Lois<br/>Ryder</h1>
	{/key}
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
		overflow: hidden;
	}

	.bg {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		opacity: 0;
		background-position: center center;
		background-repeat: no-repeat;
		background-size: cover;
		background-color: black;
		animation: scale 2s forwards;
		animation-delay: .5s;
	}

	h1 {
		color: #fff;
		text-align: center;
		line-height: 0.79;
		font-size: 250px;
		user-select: none;
		margin-bottom: 0;
		animation: scale-fade .8s forwards;
		animation-delay: .2s;
		transform: scale(.8);
		opacity: 0;

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

	@keyframes scale-fade {
		from {
			transform: scale(.8);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	@keyframes scale {
		from {
			transform: scale(1.2);
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
