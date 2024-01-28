<script>
    async function getAmount() {
        const res = await fetch('http://localhost:8080')
        return await res.text();
    }

</script>

<h1>
    Welcome to Split It. You owe
    {#await getAmount()}
        umm
    {:then amount}
        {amount}
    {/await}
</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
