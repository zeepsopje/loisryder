<script>
	import { blur } from "svelte/transition";
    import { Layout, Span, Navbar, Footer } from '$lib';

	export let data;
</script>

<div class="root"
>
	<Navbar {...data.nav} />
	<div class="page">
		<slot />
	</div>
	<Footer {...data.footer} />
</div>

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
