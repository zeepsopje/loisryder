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

	const collections = [ 'Layers of Decay', 'Relief', 'Sea' ];
	let currCollection = 0;
</script>

<Layout cols="1" withMargin>
	<HeadingTextPair
		heading="Very nice bootyful artwork"
		text="I’m being serious, I’m being serious. I don’t do if, buts or maybes. I only do absolutes. If me aunt had balls she would’ve been me uncle, but she doesn’t, so she isn’t, you know what I’m saying."
	/>
	<AutoSwitch bind:selected={currCollection} options={collections} />
	<div class="gallery">
		<Layout cols={[1, 2, 4]}>
			{#key currCollection}
				<Span>
					<div class="item text">
						<Text>
							<h2>{collections[currCollection]}</h2>
							<p>
								Shank capicola burgdoggen ribeye tongue tri-tip, short ribs pig. Pork belly turducken doner pork chop.
							</p>
							<ArrowButton text="See all" href="/work" />
						</Text>
					</div>
				</Span>
				<Span>
					<div
						class="item"
						style:background-image="url(images/1.jpg)"
					/>
				</Span>
				<Span>
					<div
						class="item"
						style:background-image="url(images/2.jpg)"
					/>
				</Span>
				<Span>
					<div
						class="item"
						style:background-image="url(images/3.jpg)"
					/>
				</Span>
				<Span>
					<div
						class="item"
						style:background-image="url(images/4.jpg)"
					/>
				</Span>
				<Span>
					<div
						class="item"
						style:background-image="url(images/5.jpg)"
					/>
				</Span>
				<Span>
					<div
						class="item"
						style:background-image="url(images/6.jpg)"
					/>
				</Span>
				<Span>
					<div
						class="item"
						style:background-image="url(images/7.jpg)"
					/>
				</Span>
			{/key}
		</Layout>
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
</style>
