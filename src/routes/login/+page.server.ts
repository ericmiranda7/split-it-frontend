// runs on server when backend responds to frontend
export async function load({ cookies , url}) {
    const token = url.searchParams.get('token')
    const name = url.searchParams.get('name')
    const isAuthenticated = token !== null

    // set client cookies with auth info
    if (isAuthenticated && name) {
        cookies.set('token', token, {
            path: '/',
            httpOnly: false
        })
        cookies.set('name', name, {
            path: '/',
            httpOnly: false
        })
        return {
            user: {isAuthenticated, name}
        }
    }
}