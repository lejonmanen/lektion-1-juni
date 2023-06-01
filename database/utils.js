// Fejkdatabas för att spara tid
let users = []

function addNewUser(email, key) {
	users.push({ email, key, requestCount: 0 })
	console.log('utils.js: Added new user with API key:', email, key)
}

function getUsers() {
	return users
}

export { addNewUser, getUsers }
