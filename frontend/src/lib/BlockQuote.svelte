<script>
	export let text;
</script>

<blockquote>
	“{text}”
</blockquote>

<style lang="scss">
	blockquote {
		text-align: center;
		padding: 204px 50px;
		background-color: #000;
		color: #fff;
		font-size: 100px;
		font-family: 'Italiana', serif;
		text-transform: lowercase;

		@media (max-width: $breakpoint-tablet) {
			font-size: 80px;
		}

		@media (max-width: $breakpoint-mobile) {
			padding: 75px 20px;
			font-size: 60px;
		}
	}
</style>
