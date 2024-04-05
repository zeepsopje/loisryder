<script>
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import { blur, fly, scale } from "svelte/transition";
	import {
		Layout,
		Menu,
		Span,
		Navbar,
		Footer,
	} from '$lib';
	import { onMount } from "svelte";

	export let data;
	export let menuItems = [];

	let menuOpened = false;

	const duration = 500;
	const delay = duration;

	afterNavigate(() => {
		disableScrollHandling();
		setTimeout(() => {
			scrollTo({ top: 0, behavior: 'instant' });
		}, duration);
	});
</script>

{#key data?.path}
	<div
		class="root"
		in:fly={{ y: -50, duration, delay }}
		out:fly={{ y: 0, duration }}
	>
		<div class="page">
			<slot />
		</div>
		<Footer {...data?.footer} />
	</div>
{/key}
<Menu items={data?.nav?.menuItems} bind:active={menuOpened} />
<Navbar bind:menuOpened />

<style lang="scss">
	.root {
		min-height: 100vh;
	}

	.page {
		display: flex;
		flex-direction: column;
		gap: 143px;

		@media (max-width: $breakpoint-tablet) {
			gap: 40px;
		}

		@media (max-width: $breakpoint-mobile) {
			gap: 20px;
		}
	}
</style>
