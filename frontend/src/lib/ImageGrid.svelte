<script>
	import { Layout, Span, Media } from '$lib';

	export let images = [];
</script>

<Layout cols={[1, 2, 4]}>
	{#each images as image}
		<Span cols={[1, image.isLandscape ? 2 : 1]}>
			<div class="image">
				<Media
					file={image.filename}
					alt={image.alt}
					cover
				/>
			</div>
		</Span>
	{/each}
</Layout>

<style>
	.image {
		height: 350px;
	}

	@media (max-width: 650px) {
		.image {
			height: 250px;
		}
	}

	@media (max-width: 530px) {
		.image {
			height: 200px;
		}
	}
</style>
