<script lang="ts">
    import * as Popover from "$lib/components/ui/popover";
    import { Button } from "$lib/components/ui/button";
    import Sun from "lucide-svelte/icons/sun";
    import Moon from "lucide-svelte/icons/moon";

    import { toggleMode } from "mode-watcher";
</script>

<div class="flex flex-row justify-between">
    <Button on:click={toggleMode} variant="outline" size="icon">
        <Sun
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        />
        <Moon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
    </Button>
    <Button>Group view</Button>
    <div>
        <Popover.Root>
            <Popover.Trigger><Button>Add Expense</Button></Popover.Trigger>
            <Popover.Content>
                <div>
                    <p>Add an expense</p>
                    <form>
                        <input placeholder="description">
                        <input placeholder="amount">
                        <button>submit</button>
                    </form>
                </div>
            </Popover.Content>
        </Popover.Root>
    </div>
    <Button>Account</Button>
</div>