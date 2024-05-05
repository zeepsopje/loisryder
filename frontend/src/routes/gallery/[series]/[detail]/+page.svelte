<script>
	import {
		PageHeader,
	} from '$lib';

	export let data;

	const {
		width,
		height,
		year,
		type,
		image,
	} = data.artwork;
</script>

<PageHeader title={data.title} align="center" />
<div class="artwork">
	<img src={image.sizes.tablet.url} alt={data.title} />
	<div class="specs">
		<div class="spec">
			<h3>Year</h3>
			{year}
		</div>
		<div class="spec">
			<h3>Type</h3>
			{type}
		</div>
		<div class="spec">
			<h3>Series</h3>
			{data.series}
		</div>
		{#if width && height}
			<div class="spec">
				<h3>Dimensions</h3>
				{width} x {height}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.artwork {
		width: 800px;
		max-width: 100%;
		margin: 0 auto;
		padding: 0 $page-margin;
		img {
			width: 100%;
		}
	}

	.specs {
		display: flex;
		justify-content: space-between;
		margin-top: 50px;
	}

	.spec {
		h3 {
			font-family: $body-font;
			font-size: 16px;
			opacity: .4;
			text-transform: uppercase;
		}
	}
</style>
