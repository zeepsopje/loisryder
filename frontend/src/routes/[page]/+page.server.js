import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const res = await fetch(`/api/pages/slug/${params.page}`);

	if (res.status !== 200) {
		return error(404);
	}

	const page = await res.json();

	return {
		...page,
	}
}
