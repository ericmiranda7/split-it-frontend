// takes in locals from hooks.server.ts and makes available to all pages
export async function load({cookies, url}) {
    const isAuthenticated = cookies.get('auth') !== undefined
    const name = cookies.get('name')
    return {user: {isAuthenticated, name}}
}