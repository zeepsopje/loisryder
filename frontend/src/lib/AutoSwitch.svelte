<script>
	import { onMount } from "svelte";

	export let options = [];
	export let selected = 0;

	let timeSpent = 0;

	onMount(() => {
		setInterval(() => {
			timeSpent++;
			if (timeSpent === 5) {
				selected++;
				if (selected > options.length-1) {
					selected = 0;
				}
				timeSpent = 0;
			}
		}, 1000);
	});

	function set(i) {
		selected = i;
		timeSpent = 0;
	}
</script>

<div class="options">
	{#each options as option, i}
		<div
			class="option"
			class:selected={selected === i}
			on:click={() => set(i)}
		>
			<img src="arrow.png" class="arrow">
			{option}
		</div>
	{/each}
</div>

<style lang="scss">
	.options {
		display: inline-flex;
		flex-direction: column;
	}

	.option {
		position: relative;
		padding: 17px 0;
		transition: all .2s ease-in-out;
		cursor: pointer;
		opacity: .5;
	}

	.arrow {
		position: absolute;
		right: calc(100% + 22px);
		transition: all .2s ease-in-out;
		opacity: 0;
	}

	.selected {
		padding-left: 22px;
		opacity: 1;
		.arrow {
			opacity: 1;
			right: 100%;
		}
	}

	.options:hover {
		.option:not(:hover) {
			opacity: .5;
		}

		.option:hover {
			opacity: 1;
		}
	}
</style>
