<script>
	import { page } from '$app/stores';
	import { PageHeader, Text, Layout, Span } from '$lib';
</script>

<PageHeader title="Page not found" align="center" />
<Layout cols={[1, 4]} withMargin>
	<Span cols={1}></Span>
	<Span cols={2}>
		<Text align="center">
			Go back to <a href="/">home</a> or browse through the <a href="/gallery">gallery</a>.
		</Text>
	</Span>
</Layout>
