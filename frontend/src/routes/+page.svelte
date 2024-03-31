<script>
	import { Header } from '$lib';
	import { SiteIntro, CollectionPreview } from '$lib/blocks';

	export let data;

	const page = data.general.presets.home;
</script>

<Header image="lois.jpeg" />

{#each page?.blocks || [] as block}
	{#if block.blockType === 'HomeIntro'}
		<SiteIntro {...block} />
	{/if}
	{#if block.blockType === 'SeriesPreview'}
		<CollectionPreview {...block} />
	{/if}
{/each}
