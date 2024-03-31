<script>
	import { Layout, Span } from '$lib';

	export let title;
	export let align = 'left';
</script>

<Layout withMargin>
	{#if align !== 'center'}
		<Span />
	{/if}
	<Span cols={align === 'center' ? 4 : 2}>
		<h1 style:text-align={align}>{title}</h1>
	</Span>
</Layout>

<style lang="scss">
	h1 {
		padding-top: 140px;
		margin: 0;
		text-align: center;

		@media (max-width: $breakpoint-tablet) {
			padding-top: 200px;
			padding-bottom: 100px;
		}
	}
</style>
