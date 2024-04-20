<script>
	import { deleteCookie } from '$lib/cookieUtils';
	import { navigate } from 'svelte-routing';

	deleteCookie("user")
	location.reload()
</script>