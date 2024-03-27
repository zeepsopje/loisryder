<script>
	import { Layout, Span, Text } from '$lib';

	export let heading;
	export let text;
	export let centered;
</script>

<Text>
	<div class:centered>
		<Layout cols={[1, 4]}>
			<Span cols={[4, 4, 2]}>
				<h2>{heading}</h2>
			</Span>
			<Span cols={[4, 4, 2]}>
				<p>{text}</p>
			</Span>
		</Layout>
	</div>
</Text>

<style lang="scss">
	h2 {
		padding-right: 30px;

		@media (max-width: $breakpoint-tablet) {
			padding-right: 0;
		}
	}

	p {
		margin-top: 20px;

		@media (max-width: $breakpoint-tablet) {
			margin-top: 0;
		}
	}

	$test: $breakpoint-tablet + 1px;

	.centered {
		@media (min-width: $test) {
			h2 {
				text-align: right;
			}
			h2 {
				padding-right: 40px;
			};
		}

		:global(.layout) {
			align-items: last baseline;
		}
	}
</style>
