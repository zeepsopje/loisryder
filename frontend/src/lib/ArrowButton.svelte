<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let text;
	export let href;
	export let external;
</script>

<svelte:element {href} class="button" this={href ? 'a' : 'div'}>
	{text}
	<img src="/arrow.png" alt="">
</svelte:element>

<style>
	.button {
		display: flex;
		gap: 21px;
		align-items: center;
		cursor: pointer;
		text-decoration: none;
		color: #000;
		transition: .2s ease-in-out all;
	}

	.button:hover {
		gap: 43px;
	}
</style>
