<script lang="ts">
		import type { PageData } from './$types';
    import Home from "$lib/components/Home.svelte";
    import {page} from "$app/stores";

		export let data: PageData
</script>

<p>Hi, {$page.data.user?.name}</p>
<a href="/login">login</a>
<a href="/protected/about">about</a>
<a href="/protected/logout" data-sveltekit-reload="true" data-sveltekit-preload-data="false">logout</a>

<Home amountOwed="{Number.parseFloat(data.expenseDetails.amount)}" />