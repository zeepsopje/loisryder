import { error } from '@sveltejs/kit';
import payload from '$lib/server/payload';

export async function load({ params, fetch }) {
	const { status, body } = await payload(fetch, `/series/slug/${params.series}`);

	if (status !== 200) {
		return error(404);
	}

	return {
		page: body
	}
}
