import { error } from '@sveltejs/kit';
import payload from '$lib/server/payload';

export async function load({ fetch }) {
	const { status, body } = await payload(fetch, '/globals/general');

	if (status !== 200 || !body.presets?.home) {
		return error(404);
	}

	return {
		page: body.presets.home
	}
}
