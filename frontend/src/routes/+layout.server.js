export async function load({ url, fetch }) {
	const res = await fetch('/api/globals')
		.then(res => res.json());

	return { ...res, path: url.pathname };
}
