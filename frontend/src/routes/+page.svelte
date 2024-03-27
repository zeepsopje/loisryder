<script>
	import { Header } from '$lib';
	import { SiteIntro, CollectionPreview } from '$lib/blocks';

	export let data;
</script>

<Header image="lois.jpeg" />

{#each data.page?.blocks || [] as block}
	{#if block.blockType === 'HomeIntro'}
		<SiteIntro {...block} />
	{/if}
{/each}
<CollectionPreview />
