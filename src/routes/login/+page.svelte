<script>
import {env} from "$env/dynamic/public";
import { page } from '$app/stores';

const isAuthenticated = $page.url.searchParams.has('token');
const token = $page.url.searchParams.get('token')
const name = $page.url.searchParams.get('name')
console.log('t,n', token, name)
</script>

<svelte:head>
    <script src="https://accounts.google.com/gsi/client" async></script>
</svelte:head>

{#if !isAuthenticated}
<p>Hi, please login</p>
{:else}
    <p>Welcome eric</p>
{/if}

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