import type {Cookies} from "@sveltejs/kit";

export function authenticateUser(cookies: Cookies) {
    if (cookies.get('token')) {
        return {
            name: cookies.get('name'),
            token: cookies.get('token')
        }
    }
}