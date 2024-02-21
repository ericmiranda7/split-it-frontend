<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	if (browser && $page.data.user?.name) {
		setTimeout(() => goto('/app/home'), 1200);
	}

</script>
henlu and welcome to split that, {$page.data.user?.name}
<br>
loading app...