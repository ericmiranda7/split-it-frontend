import { env } from "$env/dynamic/public";
import {redirect} from "@sveltejs/kit";

// runs on server at initial web application load
export async function load({locals, route, fetch}) {
    // @ts-ignore
    const user = locals.user

    // server side route protection
    if (!user && route.id !== '/login') throw redirect(302, '/login')

    return {
        user: user
    }
}