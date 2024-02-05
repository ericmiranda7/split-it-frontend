<script lang="ts">
    import {OWE, ARE_OWED} from '../../consts.js'
    import BlockSeperator from "$lib/components/BlockSeperator.svelte";
    import ExpenseList from "$lib/components/ExpenseList.svelte";
    import NavigationTab from "$lib/components/NavigationTab.svelte";

    export let amountOwed = 0;

    const oweString = amountOwed > 0 ? OWE : ARE_OWED;
</script>

<div class="flex-col grow">
    <h1>
        You {oweString}
        <span class="{oweString === OWE ? 'text-red-500' : 'text-green-500'}">
        {amountOwed < 0 ? -amountOwed : amountOwed}
    </span>
    </h1>

    <BlockSeperator />

    <div class="grow">
        <ExpenseList />
    </div>

</div>