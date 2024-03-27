<script>
	export let cols = [1, 2, 4];
	export let withMargin = false;
	export let style;
	export let gap;

	if (!Array.isArray(cols)) {
		cols = [cols];
	}

	if (cols.length === 0) {
		cols = [4];
	}
</script>

<div
	class="layout"
	class:withMargin
	style:--mobile-cols={cols[0]}
	style:--tablet-cols={cols[1] || cols[0]}
	style:--desktop-cols={cols[2] || cols[1] || cols[0]}
	style:gap="{gap}px"
	{style}
>
	<slot />
</div>

<style lang="scss">
	$desktop-cols: var(--desktop-cols);
	$tablet-cols: var(--tablet-cols);
	$mobile-cols: var(--mobile-cols);

	.layout {
		width: 100%;
		max-width: $page-width;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat($desktop-cols, 1fr);

		&.withMargin {
			padding: 0 $page-margin;
			@media (max-width: $breakpoint-mobile) {
				padding: 0 $page-margin-mobile;
			}
		}

		@media (max-width: $breakpoint-tablet) {
			grid-template-columns: repeat($tablet-cols, 1fr);
		}

		@media (max-width: $breakpoint-mobile) {
			grid-template-columns: repeat($mobile-cols, 1fr);
		}
	}
</style>
