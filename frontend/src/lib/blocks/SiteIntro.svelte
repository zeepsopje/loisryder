<script>
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import {
		Layout,
		Span,
		Text,
		BlockQuote,
		Media,
	} from '$lib';

	export let intro;
	export let image;
	export let title;
	export let text;
	export let quote;
</script>

<div class="site-intro">
	<Layout withMargin>
		<Span cols="2">
			<Text>
				<h2>{title}</h2>
				<p class="floating-text">{text}</p>
			</Text>
		</Span>
		<Span cols="2">
			<Media file="{image.sizes.tablet.filename}" />
		</Span>
	</Layout>
	<div class="full-width-image">
		<Media file={image.sizes.tablet.filename} />
	</div>
	<BlockQuote text={quote} />
</div>

<style lang="scss">
	.floating-text {
		width: 50%;
		margin: 0 auto;

		@media (max-width: $breakpoint-tablet) {
			width: 50%;
			margin: 0;
		}

		@media (max-width: $breakpoint-mobile) {
			width: 100%;
		}
	}

	.site-intro :global(img) {
		display: block;
		@media (max-width: $breakpoint-tablet) {
			display: none;
		}
	}

	.full-width-image :global(img) {
		display: none;
		@media (max-width: $breakpoint-tablet) {
			display: block;
			margin-top: 40px;
		}
	}

	:global(blockquote) {
		margin-top: 117px;
		@media (max-width: $breakpoint-tablet) {
			margin-top: 0;
		}
	}
</style>
