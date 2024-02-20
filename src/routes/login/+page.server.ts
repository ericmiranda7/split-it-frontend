import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({cookies , url}) => {
    const urlToken = url.searchParams.get('token')
    const urlName = url.searchParams.get('name')?.replace('%20', ' ')

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

        throw redirect(302, '/')
    }
}