<script lang="ts">
	import '../app.css';
	import NavigationTab from '$lib/components/NavigationTab.svelte';
	import BlockSeperator from '$lib/components/BlockSeperator.svelte';
	import { ModeWatcher } from 'mode-watcher';

</script>

<ModeWatcher />

<div class="grow">
		<slot />
</div>

<BlockSeperator />

<NavigationTab />
