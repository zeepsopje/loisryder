<script>
	import {
		Layout,
		Span,
		PageHeader,
		HeadingTextPair,
		ArrowButton,
		Media,
		ImageGrid,
	} from '$lib';

	export let data;

	const page = data.general.presets.gallery;

	function mapSeriesData() {
		return data.series.map(serie => {
			return {
				...serie,
				images: serie.pictures.map(image => {
					return {
						...image,
						src: image.image.sizes.tablet.url,
						alt: image.alt,
					}
				}),
			};
		});
	}
</script>

<PageHeader title={page.title} align="center" />
<Layout withMargin gap="150">
	{#each mapSeriesData() as {title, text, slug, images}}
		<Span cols={[1, 2, 4]}>
			<a href="/gallery/{slug}">
				<HeadingTextPair
					centered
					heading={title}
					text={text}
				/>
				<ImageGrid {images} />
			</a>
		</Span>
	{/each}
</Layout>
