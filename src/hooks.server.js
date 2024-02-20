import {authenticateUser} from "$lib/auth";
import { redirect } from '@sveltejs/kit';

export function handle({event, resolve}) {
	// for server side route protection

	console.log('server hook ran')
	// @ts-ignore
	let user = authenticateUser(event.cookies)

	if (!user?.token && event.route.id !== '/login') {
		redirect(302, '/login')
	}

	return resolve(event);
}