<script>
	import { user, expenseAccount} from '$lib/store';
	import { onMount } from 'svelte';
	import BlockSeperator from './BlockSeperator.svelte';

	const oweString = $expenseAccount.amountOwed > 0 ? 'owe' : 'are owed';

	onMount(async () => {
		fetch(import.meta.env.VITE_BACKEND_HOSTNAME + '/api/accounts', {
			headers: { 'Authorization': `Bearer ${$user.token}` }
		})
			// .then(response => response.json())
			.then(res => res.json())
			.then(data => {
				$expenseAccount = {amountOwed: data}
			})
			.catch(err => console.log(err))
	})
</script>

<p>Hi, {$user.name}</p>
<a href="/login">login</a>
<a href="/app/about">about</a>
<a href="/app/logout" data-sveltekit-reload="true" data-sveltekit-preload-data="false">logout</a>

<div class="flex-col grow">
	<h1>
		You {oweString}
		<span class="{oweString === 'owe' ? 'text-red-500' : 'text-green-500'}">
			{$expenseAccount.amountOwed < 0 ? -$expenseAccount.amountOwed : $expenseAccount.amountOwed}
    </span>
	</h1>

	<BlockSeperator />

	<div class="grow">
<!--		<ExpenseList />-->
	</div>

</div>
