<svelte:head>
	<script src="https://accounts.google.com/gsi/client" async></script>
</svelte:head>

<script lang="ts">
	import {onMount} from "svelte";
	import user from '$lib/store';
	import { navigate } from 'svelte-routing';

	let name = $user.name
	// http://localhost:5173/login?name=Eric%20Miranda&redirect=true&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjZjZTExYWVjZjllYjE0MDI0YTQ0YmJmZDFiY2Y4YjMyYTEyMjg3ZmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2NDM0Mjk0MDk5MDgtaHNhaHF0b2czMTNmNTIxdnJpaXBxajZvOGZnbDBmdmEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2NDM0Mjk0MDk5MDgtaHNhaHF0b2czMTNmNTIxdnJpaXBxajZvOGZnbDBmdmEuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTIyNTk4MDQ5MzkxNTEyMjQyMDYiLCJlbWFpbCI6ImVyaWNtaXJhbmRhN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmJmIjoxNzEzNDA0ODU0LCJuYW1lIjoiRXJpYyBNaXJhbmRhIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lMc1ZDc09jQnpOSkVyTXNtTXZXdkdvX29BQnFWQVRYV0dwMmJ1MzJiVmxEM29mb0loRUE9czk2LWMiLCJnaXZlbl9uYW1lIjoiRXJpYyIsImZhbWlseV9uYW1lIjoiTWlyYW5kYSIsImlhdCI6MTcxMzQwNTE1NCwiZXhwIjoxNzEzNDA4NzU0LCJqdGkiOiJlODM5ZDg0OGNkNzU1ZTQ3NzY2ZjUwZGYyYmFhOTg2ZjA5MGQ0NDlmIn0.c1yuxPfm-eDRRDXVTwMZBpNvXNvjl33tPOYhxgPpe8m1Q3eOqiKb_WQpyGbBTeqPdeIl1vb9Mc0PJ7VOULgIh3hsu0fahNIblZaOvy0S4SiAtwGPe-3ocTkNjIHmih3ksHkC1ozBYoJDpBfkoX0fGzx2B7p2UxUGtwlQ28xm2i-Lu1Ud2bohLS8wl7LlJjt7Kd5Ot2mDBK3UnbE-1vwsHMErlRiWwORYqMqxhjsDZSCnr5fTIlOOcWVlKxFYMDg7VrpBjtefo5gExoeHVpp420ia52nTZW2zmR-wMpSfix_6IJsleRX4__1RaxxPSHXAleo-MV7e5UKAttY1VoPmqw
	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search)
		if (urlParams.get("redirect") === "true") {
			console.log(window.location.href)
			console.log(urlParams.getAll('name'))
			$user.name = urlParams.get('name')!
			$user.token = urlParams.get('token')!
			$user.isAuthenticated = true

			if ($user.name && $user.token) {
				document.cookie = `user=${JSON.stringify($user)}`
			}

			navigate('/home')
		}
	})
</script>

{#if name}
	<p>Hi, {name}, no need to login</p>
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
