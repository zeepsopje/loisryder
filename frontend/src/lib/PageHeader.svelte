<script>
	import { Layout, Span } from '$lib';

	export let title;
</script>

<Layout>
	<Span cols="4">
		<h1>{title}</h1>
	</Span>
</Layout>

<style lang="scss">
	h1 {
		padding-top: 340px;
		margin: 0;
		text-align: center;

		@media (max-width: $breakpoint-tablet) {
			padding-top: 200px;
			padding-bottom: 100px;
		}
	}
</style>
