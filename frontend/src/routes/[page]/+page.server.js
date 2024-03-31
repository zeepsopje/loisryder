export async function load({ params, fetch }) {
	const page = await fetch(`/api/pages?slug=${params.page}`)
		.then(res => res.json())
		.then(res => res);

	return {
		...page,
	}
}
