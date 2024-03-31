import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch('/api/series')
		.then(res => res.json());

	return {
		series: res.docs,
	}
}
