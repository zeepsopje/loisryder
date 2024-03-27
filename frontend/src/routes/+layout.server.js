import payload from '$lib/server/payload';

export async function load({ url, fetch }) {
	const res = await Promise.all([
		payload(fetch, '/globals/header'),
		payload(fetch, '/globals/footer'),
		payload(fetch, '/globals/nav?depth=1'),
	]);

	const [
		{ body: header },
		{ body: footer },
		{ body: nav },
	] = res;

	console.log(footer);

	return {
		header,
		footer,
		nav,
		url: url.pathname,
	}
}
