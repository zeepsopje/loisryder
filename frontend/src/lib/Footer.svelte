<script>
	import {
		Layout,
		Span,
		Text,
		ArrowButton,
	} from '$lib';

	export let title;
	export let text;
	export let link;

	let hasExternalUrl = link.type === 'custom';
</script>

<footer>
	<div class="main">
		<Layout withMargin cols={[1, 3, 4]}>
			<div class="cta">
				<Text>
					<h2>{title}</h2>
					<p>{text}</p>
					<ArrowButton
						external={hasExternalUrl}
						text={link.label}
						href={hasExternalUrl ? link.url : `/${link.reference.value.slug}`}
					/>
				</Text>
			</div>
		</Layout>
	</div>
	<div class="logo">
		<Layout withMargin>
			<span>
				Lois<br/>Ryder
			</span>
		</Layout>
	</div>
</footer>

<style lang="scss">
	footer {
		height: 50vh;
	}

	.cta {
		grid-column: 2;

		@media (max-width: 1175px) {
			grid-column: 2 / span 2;
		}

		@media (max-width: $breakpoint-tablet) {
			grid-column: span 2;
		}

		@media (max-width: 570px) {
			grid-column: span 3;
		}
	}

	.main {
		padding: 308px 0 105px;

		@media (max-width: $breakpoint-mobile) {
			padding: 51px 0 193px;
		}
	}

	.logo {
		padding-bottom: 48px;

		@media (max-width: $breakpoint-mobile) {
			padding-bottom: 204px;
			display: flex;
			justify-content: center;
		}
	}

	.logo span {
		font-size: 48px;
		line-height: .79;
		font-family: 'Italiana', serif;
	}
</style>
