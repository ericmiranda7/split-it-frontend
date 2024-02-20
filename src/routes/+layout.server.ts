import { authenticateUser } from '$lib/auth';

export const load = async ({locals, cookies}) => {
    // @ts-ignore
    locals.user = authenticateUser(cookies)

    // @ts-ignore
    return {user: locals.user}
}