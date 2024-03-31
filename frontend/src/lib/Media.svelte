<script>
	export let file;
	export let alt;
	export let cover;
</script>

<img class:cover src="/media/{file}" {alt} />

<style>
	img {
		max-width: 100%;
	}

	img.cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
