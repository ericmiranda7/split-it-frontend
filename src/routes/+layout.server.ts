import { env } from "$env/dynamic/public";
import {redirect} from "@sveltejs/kit";

// runs on server at initial web application load
export async function load({locals, route}) {
    const user = locals.user

    // server side route protection
    if (!user && route.id !== '/login') throw redirect(302, '/login')

    const res = await fetch(env.PUBLIC_BACKEND_HOSTNAME + "/api/accounts/eric");
    return {
        amount: await res.text(),
        user: user
    }
}