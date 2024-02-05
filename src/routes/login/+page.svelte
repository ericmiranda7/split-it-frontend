<svelte:head>
    <script src="https://accounts.google.com/gsi/client" async></script>
</svelte:head>

<script>
    import {env} from "$env/dynamic/public";
</script>

<p>Hi, please login</p>

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