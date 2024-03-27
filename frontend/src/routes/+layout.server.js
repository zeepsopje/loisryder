import payload from '$lib/server/payload';

export async function load({ url, fetch }) {
	const [
		{ body: header },
		{ body: footer },
		{ body: nav },
	] = await Promise.all([
		payload(fetch, '/globals/header'),
		payload(fetch, '/globals/footer'),
		payload(fetch, '/globals/nav'),
	]);

	return {
		header,
		footer,
		nav,
		url: url.pathname,
	}
}
