<script lang="ts" , type="module">
	import { user, expenseAccount } from '$lib/store';
	import { onMount } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as Drawer from '$lib/components/ui/drawer';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';

	const oweString = $expenseAccount.amountOwed > 0 ? 'owe' : 'are owed';

	onMount(async () => {
		fetch(import.meta.env.VITE_BACKEND_HOSTNAME + '/api/accounts', {
			headers: { Authorization: `Bearer ${$user.token}` }
		})
			// .then(response => response.json())
			.then((res) => res.json())
			.then((data) => {
				$expenseAccount = { amountOwed: data };
			})
			.catch((err) => console.log(err));
	});

	let expenses = [];
	for (let i = 0; i < 99; i++) {
		expenses.push('Milk ' + (i+1))
	}
</script>

<div class="h-full flex flex-col">
	<h1>
		You {oweString}
		<span class={oweString === 'owe' ? 'text-red-500' : 'text-green-500'}>
			{$expenseAccount.amountOwed < 0 ? -$expenseAccount.amountOwed : $expenseAccount.amountOwed}
		</span>
	</h1>
	<Separator class="p-0.5 -mx-3 my-2 w-auto" />
	<!-- <Link to="/login">login</Link>
<Link to="/about">about</Link>
<Link to="/logout">logout</Link> -->

	<ScrollArea class="max-h-[86vh] h-[90vh] rounded-md border">
		<ol>
			{#each expenses as exp}
				<ul class="text-xl">{exp}</ul>
				<Separator />
			{/each}
		</ol>
	</ScrollArea>

	<div class="flex justify-center mt-auto mb-0">
		<Drawer.Root>
			<Drawer.Trigger class="mt-auto p-2"><Button>Add Expense</Button></Drawer.Trigger>
			<Drawer.Content>
				<Drawer.Header>
					<Drawer.Title>Add An Expense</Drawer.Title>
					<Drawer.Description>You, Naishar, Joswin & 3 Others</Drawer.Description>
				</Drawer.Header>

				<Separator class="mb-4" />

				<div>
					<form>
						<div class="flex justify-center">
							<label class="block p-2" for="amount">R</label>
							<input class="block" type="number" id="amount" name="amount" />
						</div>
						<div class="flex justify-center m-2">
							<label class="block p-2" for="descr">D</label>
							<input class="block" type="text" id="descr" name="descr" />
						</div>
					</form>

					<div>
						<p class="text-center">Paid by</p>
						<p class="text-center">Split</p>
					</div>
				</div>

				<Drawer.Footer>
					<Button>Submit</Button>
					<Drawer.Close>Cancel</Drawer.Close>
				</Drawer.Footer>
			</Drawer.Content>
		</Drawer.Root>
	</div>
</div>
