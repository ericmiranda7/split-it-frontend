<script lang="ts">
    import "../app.css";
    import NavigationTab from "$lib/components/NavigationTab.svelte";
    import BlockSeperator from "$lib/components/BlockSeperator.svelte";
</script>

<div class="grow">
    <slot/>
</div>

<BlockSeperator/>

<NavigationTab/>
