<script>
	import { Layout, Span, Media } from '$lib';

	export let images = [];
</script>

<Layout cols={[1, 2, 4]}>
	{#each images as image}
		<Span cols={[1, image.isLandscape ? 2 : 1]}>
			<a class="image" href={image.href}>
				<img src={image.src} alt={image.alt} />
			</a>
		</Span>
	{/each}
</Layout>

<style lang="scss">
	.image {
		display: block;
		height: 350px;
		overflow: hidden;
		position: relative;
	}

	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.image[href]::after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: #fff;
		opacity: 0;
		transition: all .2s ease-in-out;
		z-index: 1;
	}

	.image[href]:hover::after {
		opacity: .4;
	}

	@media (max-width: 650px) {
		.image {
			height: 250px;
		}
	}

	@media (max-width: $breakpoint-mobile) {
		.image {
			height: 400px;
		}
	}
</style>
