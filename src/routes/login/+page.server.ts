export async function load({ cookies }) {
    const isAuthenticated = cookies.get('auth') !== undefined
    const name = cookies.get('name')

    return {
        user: {isAuthenticated, name}
    }
}