import { writable } from 'svelte/store';

export const user = writable({} as
	{name: string, token: string, isAuthenticated: boolean}
)

export const expenseAccount = writable({} as any)