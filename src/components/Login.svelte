<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async></script>
</svelte:head>

<script lang="ts">
	import {onMount} from "svelte";
	import {user} from '$lib/store';
	import { navigate } from 'svelte-routing';

	let name = $user.name
	let loggingIn = false

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search)
		if (urlParams.get("redirect") === "true") {
			$user.name = urlParams.get('name')!
			$user.token = urlParams.get('token')!
			$user.isAuthenticated = true

			if ($user.name && $user.token) {
				document.cookie = `user=${JSON.stringify($user)}`
			}

			loggingIn = true
			setTimeout(() => navigate('/home'), 1000)
		}
	})
</script>

{#if name}
	<p>Hi, {name}, no need to login</p>
{:else if loggingIn}
	<p>logging in...</p>
{:else}
	<p>Please log in</p>
	<div id="g_id_onload"
			 data-client_id="{import.meta.env.VITE_GOOGLE_CLIENT_ID}"
			 data-context="signin"
			 data-ux_mode="popup"
			 data-login_uri="{import.meta.env.VITE_OAUTH_REDIRECT_URL}"
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
