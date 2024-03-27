<script>
	import {
		Layout,
		PageHeader,
		HeadingTextPair,
		ImageGrid,
	} from '$lib';

	export let data;


	const items = data.page.artworks.map((item, i) => ({
		isLandscape: item.isLandscape,
		alt: item.image.alt,
		filename: item.image.sizes.tablet.filename,
		href: `${data.url}/${i+1}`,
	}));
</script>

<PageHeader title={data.page.title} />
<Layout cols="1" withMargin>
	<HeadingTextPair
		heading={data.page.subtitle}
		text={data.page.text}
	/>
	<ImageGrid images={items} />
</Layout>
