<script>
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
				<h2>{@html title}</h2>
				<p class="floating-text">{@html text}</p>
			</Text>
		</Span>
		<Span cols="2">
			<Media file="{image?.sizes?.tablet?.filename}" />
		</Span>
	</Layout>
	<div class="full-width-image">
		<Media file={image?.sizes?.tablet?.filename} />
	</div>
	{#if quote}
		<BlockQuote text={quote} />
	{/if}
</div>

<style lang="scss">
	h2 {
		padding-right: 20px;
	}

	.floating-text {
		width: 50%;
		margin: 0 auto;

		@media (max-width: $breakpoint-tablet) {
			width: 100%;
			margin: 0;
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
