<script>
	import {
		PageHeader
	} from '$lib';

	export let data;

	console.log('data:', data);
</script>

<PageHeader title={data.title} align="center" />
