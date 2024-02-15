import {authenticateUser} from "$lib/auth.ts";

// runs on server at every request
export function handle({event, resolve}) {
    console.log('hook')
    event.locals.user = authenticateUser(event.cookies)

    return resolve(event);
}