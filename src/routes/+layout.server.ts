import { authenticateUser } from '$lib/auth';

export const load = async ({locals, cookies}) => {
    // @ts-ignore
    locals.user = authenticateUser(cookies)

    // provide global user session data to sveltekit client
    // @ts-ignore
    return {user: locals.user}
}