import { API_KEY, BACKEND_URL } from '$env/static/private';

export async function GET({ fetch, params, url }) {
	const res = fetch(`${BACKEND_URL}/api/${params.path + url.search}`, {
		headers: {
			'Authorization': `users API-Key ${API_KEY}`,
			'Accept-Encoding': 'br',
		}
	});

	return res;
}
