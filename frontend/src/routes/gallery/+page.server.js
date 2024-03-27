import { error } from '@sveltejs/kit';
import payload from '$lib/server/payload';

export async function load({ fetch, url }) {
	const { status, body } = await payload(fetch, '/globals/general');

	const [
		general,
		series,
	] = await Promise.all([
		payload(fetch, '/globals/general'),
		payload(fetch, '/series'),
	]);

	if (general.status !== 200 || series.status !== 200 || !general?.body?.presets?.gallery) {
		return error(404);
	}

	return {
		page: body.presets.gallery,
		series: series.body.docs || [],
	}
}
