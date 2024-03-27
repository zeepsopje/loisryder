<div class="text">
	<slot />
</div>

<style lang="scss">
	:global {
		p:not(:last-of-type), p:not(:last-child) {
			margin-bottom: 40px;
		}

		h1, h2, h3, h4, h5, h6 {
			margin-bottom: 0.8em;
		}
	}
</style>
