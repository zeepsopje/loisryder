<script>
	import { PUBLIC_BACKEND_URL } from '$env/static/public';

	export let file;
	export let alt;
	export let cover;
</script>

<img class:cover src="{PUBLIC_BACKEND_URL}/media/{file}" {alt} />

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
