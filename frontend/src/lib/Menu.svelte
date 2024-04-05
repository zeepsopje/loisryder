<script>
	import { slide as trans } from 'svelte/transition';
	import * as e from 'svelte/easing';

	export let active = false;
	export let items = [];

	function onScroll(e) {
		if (active) {
			e.preventDefault();
		}
	}
</script>

<svelte:window on:wheel|nonpassive={onScroll} />

{#if active}
	<div class="overlay" transition:trans={{ start: .9, y: -100, duration: 500, easing: e.circInOut }}>
		<img
			class="close"
			on:click={() => active = false}
			src="/close.png"
		/>
		<a class="logo" href="/">Lois<br/>Ryder</a>
		<nav>
			{#each items as { title, slug }, i}
				<a
					href="/{slug}"
					style="--spacing: {i * 100}px"
					on:click={() => active = false}
				>
					{title}
				</a>
			{/each}
		</nav>
	</div>
{/if}

<style lang="scss">
	.overlay {
		width: 100vw;
		height: 100svh;
		position: fixed;
		left: 0;
		top: 0;
		background-color: $bg-color;
		mix-blend-mode: normal;
		z-index: 2000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.logo {
		line-height: 0.79;
		font-size: 36px;
		font-family: $heading-font;
		position: absolute;
		top: 40px;
		left: 40px;
		z-index: 3;
		text-decoration: none;
		color: black;

		@media (max-width: $breakpoint-mobile) {
			font-size: 36px;
			top: 20px;
			left: 20px;
		}
	}

	.close {
		width: 96px;
		position: absolute;
		top: 38px;
		right: 40px;
		mix-blend-mode: difference;
		cursor: pointer;

		@media (max-width: $breakpoint-mobile) {
			width: 59px;
			top: 20px;
			right: 20px;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0 40px 33px;
		gap: 10px;

		@media (max-width: $breakpoint-tablet) {
			gap: 19px;
		}

		@media (max-width: $breakpoint-mobile) {
			padding: 0 20px 20px;
		}
	}

	nav a {
		text-decoration: none;
		color: #000;
		font-family: 'Italiana', serif;
		font-size: 150px;
		text-transform: lowercase;
		line-height: 0.79;
		transition: ease-in-out .2s all;

		@media (min-width: calc($breakpoint-tablet + 1px)) {
			padding-left: var(--spacing);
		}

		@media (max-width: $breakpoint-tablet) {
			font-size: 120px;
		}

		@media (max-width: $breakpoint-mobile) {
			font-size: 90px;
			line-height: 0.79;
		}
	}

	nav:hover a:not(:hover) {
		opacity: .4;
	}
</style>
