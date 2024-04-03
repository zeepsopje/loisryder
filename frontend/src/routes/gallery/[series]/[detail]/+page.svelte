<script>
	import {
		PageHeader,
		Layout,
		Span,
	} from '$lib';

	export let data;

	const {
		width,
		height,
		year,
		type,
	} = data.artwork;
</script>

<PageHeader title={data?.title} align="center" />
<div class="artwork">
	<Layout withMargin cols="1">
		<img src={data?.artwork?.image?.url} alt="">
	</Layout>
	<Layout withMargin cols={[2, 2, 4]} gap="38">
		<Span>
			<h3>Series</h3>
			{data?.series}
		</Span>
		<Span>
			<h3>Year</h3>
			{data?.artwork?.year}
		</Span>
		<Span>
			<h3>Type</h3>
			{data?.artwork?.type}
		</Span>
		{#if width && height}
			<Span>
				<h3>Dimensions</h3>
				{width} x {height}
			</Span>
		{/if}
	</Layout>
</div>

<style lang="scss">
	img {
		width: 100%;
	}

	.artwork {
		display: flex;
		flex-direction: column;
		gap: 107px;

		@media (max-width: $breakpoint-tablet) {
			gap: 41px;
		}
	}

	h3 {
		text-transform: uppercase;
		font-family: $body-font;
		opacity: .4;
		font-size: 16px;
	}
</style>
