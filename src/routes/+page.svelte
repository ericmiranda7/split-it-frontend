<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	if (browser && $page.data.user.name) {
		setTimeout(() => goto('/protected/home'), 1000)
	}
</script>
henlu and welcome to split that.
<br>
loading app...