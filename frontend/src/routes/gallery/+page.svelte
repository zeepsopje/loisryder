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

	function mapSeriesData() {
		return data.series.map(serie => {
			return {
				...serie,
				images: serie.pictures.map(image => {
					return {
						...image,
						filename: image.image.sizes.tablet.filename,
						alt: image.alt,
					}
				}),
			};
		});
	}
</script>

<PageHeader title={data.page.title} align="center" />
<Layout withMargin gap="150">
	{#each mapSeriesData() as {title, text, slug, images}}
		<Span cols={[1, 2, 4]}>
			<Layout cols="1" gap="50">
				<HeadingTextPair
					centered
					heading={title}
					text={text}
				/>
				<ImageGrid {images} />
				<ArrowButton text="Go to series '{title}'" href="/gallery/{slug}" />
			</Layout>
		</Span>
	{/each}
</Layout>
