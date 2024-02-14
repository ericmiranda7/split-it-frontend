<script lang="ts">
    import Home from "$lib/components/Home.svelte";
    import {page} from "$app/stores";
    import type {PageData} from "../../.svelte-kit/types/src/routes/$types";

    export let data: PageData;
</script>

<p>Hi, {$page.data.user?.name}</p>
<a href="/login">login</a>
<a href="/about">about</a>
<a href="/logout">logout</a>

<Home amountOwed="{Number.parseFloat(data.amount)}" />