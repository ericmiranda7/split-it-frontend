<script lang="ts">
    import {OWE, ARE_OWED} from '../consts.js'
    import type {PageData} from "./$types";

    export let data: PageData;

    const oweString = data.amt > 0 ? OWE : ARE_OWED;
</script>

<h1>
    You {oweString}
    <span class="{oweString === OWE ? 'text-red-500' : 'text-green-500'}">
        {data.amt < 0 ? -data.amt : data.amt}
    </span>
</h1>