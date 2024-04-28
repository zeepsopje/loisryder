<script>
	import { fly } from 'svelte/transition';
	import {
		Layout,
		Span,
		Text,
		HeadingTextPair,
		AutoSwitch,
		ArrowButton,
	} from '$lib';
	import { onMount } from 'svelte';

	export let title;
	export let text;

	let collections = [];
	let currCollection = 0;

	onMount(async () => {
		const res = await fetch('/api/series').then(res => res.json());
		collections = res.docs || [];
	});
</script>

<Layout cols="1" withMargin gap={30}>
	<HeadingTextPair
		heading={title}
		text={text}
	/>
	<AutoSwitch
		bind:selected={currCollection}
		options={collections?.map(({ title }) => title)}
	/>
	<div class="container">
		{#if collections.length > 0}
			<div class="gallery hidden">
				<Layout cols={[1, 2, 4]}>
					<div class="item" />
					<div class="item" />
					<div class="item" />
					<div class="item" />
				</Layout>
			</div>
			<div class="gallery">
				<Layout cols={[1, 2, 4]}>
					{#key currCollection}
						<Span>
							<div class="item text">
								<Text>
									<h2
										in:fly={{ y: -20, duration: 400, delay: 400 }}
										out:fly={{ y: -20, duration: 400 }}
									>
										{collections[currCollection]?.title}
									</h2>
									<p
										in:fly={{ y: -20, duration: 400, delay: 600 }}
										out:fly={{ y: -20, duration: 400 }}
									>
										{collections[currCollection]?.subtitle}
									</p>
									<div
										in:fly={{ y: -20, duration: 400, delay: 800 }}
										out:fly={{ y: -20, duration: 400 }}
									>
										<ArrowButton text="See all" href="/gallery/{collections[currCollection].slug}" />
									</div>
								</Text>
							</div>
						</Span>
					{/key}
					{#each collections[currCollection].pictures.slice(0, 3) as picture, i}
						{#key picture?.id}
							<div
								in:fly={{ y: 50, duration: 400, delay: 600 + (i * 200) }}
								class="item"
								style:background-image="url({picture?.image?.sizes?.tablet?.url})"
							/>
						{/key}
					{/each}
				</Layout>
			</div>
		{/if}
	</div>
</Layout>

<style lang="scss">
	.gallery {
		margin-top: 95px;

		@media (max-width: $breakpoint-mobile) {
			margin-top: 59px;
		}
	}

	.gallery .item {
		height: 100%;
		min-height: 422px;
		background-size: cover;
		background-position: center center;

		&.text {
			padding: 0 20px 20px 0;

			p {
				margin-bottom: 39px;
			}

			@media (max-width: $breakpoint-mobile) {
				min-height: 0;
				margin-bottom: 20px;
			}
		}
	} 

	.gallery.hidden {
		visibility: hidden;
	}

	.gallery:not(.hidden) {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	.container {
		position: relative;
	}
</style>
