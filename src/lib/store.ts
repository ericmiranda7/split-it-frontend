import { writable } from 'svelte/store';

const user = writable({} as {name: string, token: string})

export default user;