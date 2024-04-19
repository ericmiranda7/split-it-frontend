export function authenticateUser() {
	const userCookie = document.cookie
		.split('; ')
		.find(c => c.startsWith('user'))

	if (!userCookie) {
		return {isAuthenticated: false}
	}
	const jsonIndex = userCookie.indexOf("{")
	const userJson = userCookie.slice(jsonIndex)

	return JSON.parse(userJson)
}
