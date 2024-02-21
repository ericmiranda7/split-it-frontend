import { redirect } from '@sveltejs/kit';

export async function load({cookies}) {
    cookies.delete("name", {path: '/'})
    cookies.delete("token", {path: '/'})
    redirect(302, '/login')
}