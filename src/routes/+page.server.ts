import { redirect, type ServerLoad } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export const load: ServerLoad = async ({locals, parent}) => {
	// ensure that the layout code runs first
	// in order to avoid unauthenticated rendering / api calls
	await parent();

	const res = await fetch(env.PUBLIC_BACKEND_HOSTNAME + "/api/accounts/eric", {
		headers: {
			"Authorization": `Bearer ${locals.user.token}`
		}
	});

	if (res.status != 200) {
		throw redirect(302, '/login')
	}

	return {
		amount: await res.text(),
		user: locals.user
	}
}