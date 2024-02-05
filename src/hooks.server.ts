export async function handle({ event, resolve }) {
    const isAuthenticated = event.cookies.get('auth') !== undefined

    if (!isAuthenticated && event.url.pathname !== "/login") {
        return new Response(null, {status: 302, headers: {Location: '/login'}})
    }
    return resolve(event)
}