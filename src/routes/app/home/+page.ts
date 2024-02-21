import { env } from '$env/dynamic/public';
import type {PageLoad} from './$types';

export const load: PageLoad = async ({parent, fetch}) => {
	const { user } = await parent();
	console.log('home page', user.token)
	const res = await fetch(env.PUBLIC_BACKEND_HOSTNAME + '/api/accounts',
		{
			headers: { 'Authorization': `Bearer ${user.token}` }
		});

	return {
		expenseDetails: { amount: await res.text() }
	};
};