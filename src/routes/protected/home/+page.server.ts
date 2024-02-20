import type { ServerLoad } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export const load: ServerLoad = async ({ cookies, fetch }) => {
	const res = await fetch(env.PUBLIC_BACKEND_HOSTNAME + '/api/accounts/eric',
		{
			headers: { 'Authorization': `Bearer ${cookies.get('token')}` }
		});

	return {
		expenseDetails: { amount: await res.text() }
	};
};