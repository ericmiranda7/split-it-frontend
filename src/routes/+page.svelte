<script lang="ts">
    import Home from "$lib/components/Home.svelte";
    import {page} from "$app/stores";
    import type {PageData} from "../../.svelte-kit/types/src/routes/$types";

    const name = $page.data.user.name
    export let data: PageData;
</script>

<a href="/login">login</a>

<p>Hi, {name}</p>

<Home amountOwed="{Number.parseFloat(data.amount)}" />