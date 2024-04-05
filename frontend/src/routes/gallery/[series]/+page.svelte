<script>
	import {
		Layout,
		PageHeader,
		HeadingTextPair,
		ImageGrid,
	} from '$lib';

	export let data;

	const items = data?.page?.artworks?.map((item, i) => ({
		isLandscape: item?.isLandscape,
		alt: item?.image?.alt,
		src: item?.image?.sizes?.tablet?.url,
		href: `${data?.page?.slug}/${i+1}`,
	}));
</script>

<PageHeader title={data?.page?.title} />
<Layout cols="1" withMargin>
	<HeadingTextPair
		heading={data?.page?.subtitle}
		text={data?.page?.text}
	/>
	<div class="space"></div>
	<ImageGrid images={items} />
</Layout>

<style lang="scss">
	.space {
		@media (max-width: $breakpoint-tablet) {
			height: 50px;
		}
	}
</style>
