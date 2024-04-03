<script>
	import { Header } from '$lib';
	import { SiteIntro, CollectionPreview } from '$lib/blocks';

	export let data;

	const blocks = data?.general?.presets?.home?.blocks || [];
</script>

<Header image="lois.jpeg" />

{#each blocks as block}
	{#if block.blockType === 'HomeIntro'}
		<SiteIntro {...block} />
	{/if}
	{#if block.blockType === 'SeriesPreview'}
		<CollectionPreview {...block} />
	{/if}
{/each}
