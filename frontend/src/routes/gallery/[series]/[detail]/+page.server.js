import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const { artworks, title } = await fetch(`/api/series/slug/${params.series}`)
		.then(res => res.json());

	if (artworks.length < params.detail-1) {
		return error(404);
	}

	return {
		series: title,
		title: artworks[params.detail-1].name || `${title} N°${params.detail}`,
		artwork: artworks[params.detail-1]
	}
}
