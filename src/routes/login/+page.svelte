<svelte:head>
    <script src="https://accounts.google.com/gsi/client" async></script>
</svelte:head>

<script lang="ts">
    import {env} from "$env/dynamic/public";
    import {page} from "$app/stores";
    import { goto, invalidateAll } from '$app/navigation';
    import {onMount} from "svelte";

    let name = $page.data.user?.name

    onMount(() => {
        if ($page.url.searchParams.get('redirect') === 'true') {
            goto('/app/home', {invalidateAll: true})
        }
    })
</script>

{#if name}
    <p>Hi, {name}, no need to login</p>
{:else}
    <p>Please log in</p>
    <div id="g_id_onload"
         data-client_id="{env.PUBLIC_GOOGLE_CLIENT_ID}"
         data-context="signin"
         data-ux_mode="popup"
         data-login_uri="{env.PUBLIC_OAUTH_REDIRECT_URL}"
         data-auto_prompt="false">
    </div>

    <div class="g_id_signin"
         data-type="standard"
         data-shape="rectangular"
         data-theme="outline"
         data-text="signin_with"
         data-size="large"
         data-logo_alignment="left">
    </div>
{/if}
