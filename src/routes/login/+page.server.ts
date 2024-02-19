import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ cookies , url}) => {
    if (cookies.get('token')) {
        // auth existing, do nothing.
        console.log('i in')
        return {}
    }

    const urlToken = url.searchParams.get('token')
    const urlName = url.searchParams.get('name')

    // set client cookies with auth info
    if (urlToken && urlName) {
        cookies.set('token', urlToken, {
            path: '/',
            httpOnly: false
        })
        cookies.set('name', urlName, {
            path: '/',
            httpOnly: false
        })
        return {
            user: {isAuthenticated: true, name: urlName}
        }
    }
}