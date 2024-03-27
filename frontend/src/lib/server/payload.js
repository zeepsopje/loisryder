import path from 'node:path';
import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { PRIVATE_API_KEY } from '$env/static/private';

export default async function(fetch, route) {
	const res = await fetch(`${PUBLIC_BACKEND_URL}/${path.join('api', route)}`, {
		headers: {
			'Authorization': `users API-Key ${PRIVATE_API_KEY}`,
			'Content-Type': 'application/json',
		}
	});

	try {
		const body = await res.json();

		return {
			status: res.status,
			body,
		}
	} catch (e) {
		return { e };
	}
}
