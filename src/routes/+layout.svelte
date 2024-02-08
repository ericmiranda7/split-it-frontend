<script lang="ts">
    import "../app.css";
    import NavigationTab from "$lib/components/NavigationTab.svelte";
    import BlockSeperator from "$lib/components/BlockSeperator.svelte";
    import {navigating} from "$app/stores";
    import {browser} from "$app/environment";
    import {goto} from "$app/navigation";
    import {getCookie} from "$lib/cookie";

    // client side route protection
    if (browser) {
        navigating.subscribe((nav) => {
            if (!nav) return

            const toRoute = nav.to?.route.id
            nav.complete.then(() => {
                if (toRoute !== '/login' && !getCookie('name')) goto('/login')
            })
        })
    }
</script>

<div class="grow">
    <slot/>
</div>
<BlockSeperator/>
<NavigationTab/>
