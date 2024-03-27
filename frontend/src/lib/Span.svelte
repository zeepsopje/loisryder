<script>
	export let cols = 1;

	if (!Array.isArray(cols)) {
		cols = [cols];
	}

	if (cols.length === 0) {
		cols = [1];
	}
</script>

<div
	class="span"
	style:--mobile-cols={cols[0]}
	style:--tablet-cols={cols[1] || cols[0]}
	style:--desktop-cols={cols[2] || cols[1] || cols[0]}
>
	<slot />
</div>

<style lang="scss">
	.span {
		grid-column: span var(--desktop-cols);

		@media (max-width: $breakpoint-tablet) {
			grid-column: span var(--tablet-cols);
		}

		@media (max-width: $breakpoint-mobile) {
			grid-column: span var(--mobile-cols);
		}
	}
</style>
