<script lang="ts">
    import "../app.css";
    import NavigationTab from "$lib/components/NavigationTab.svelte";
    import BlockSeperator from "$lib/components/BlockSeperator.svelte";
    import {page} from "$app/stores";
    import {goto} from "$app/navigation";
    import {onMount} from "svelte";

    // ensure client side auth guard
    onMount(() => {
        page.subscribe((page) => {
            if (!page.data.user.isAuthenticated && page.route.id !== '/login') {
                goto('/login')
            }
        })
    })
</script>

<div class="grow">
    <slot/>
</div>
<BlockSeperator/>
<NavigationTab/>
