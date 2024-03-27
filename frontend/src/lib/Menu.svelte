<script>
	import { slide as trans } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import * as e from 'svelte/easing';

	const dispatch = createEventDispatcher();
	export let items = [];
</script>

<div class="overlay" transition:trans={{ start: .9, y: -100, duration: 500, easing: e.circInOut }}>
	<img
		class="close"
		on:click={() => dispatch('close')}
		src="/close.png"
	/>
	<nav>
		{#each items as { title, slug }, i}
			<a
				href="/{slug}"
				style="--spacing: {i * 100}px"
				on:click={() => dispatch('close')}
			>
				{title}
			</a>
		{/each}
	</nav>
</div>

<style lang="scss">
	.overlay {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background-color: $bg-color;
		mix-blend-mode: normal;
		z-index: 2;
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
		gap: 56px;
		position: absolute;
		left: 0;
		bottom: 0;

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
		font-size: 200px;
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
