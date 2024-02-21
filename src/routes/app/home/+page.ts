import { env } from '$env/dynamic/public';
import type {PageLoad} from './$types';

export const load: PageLoad = async ({parent, data}) => {
	await parent();
	console.log('home page load', data)
	// const res = await fetch(env.PUBLIC_BACKEND_HOSTNAME + '/api/accounts/eric',
	// 	{
	// 		headers: { 'Authorization': `Bearer ${cookies.get('token')}` }
	// 	});
	//
	// return {
	// 	expenseDetails: { amount: await res.text() }
	// };
	return {
		expenseDetails: { amount: 32 }
	};
};