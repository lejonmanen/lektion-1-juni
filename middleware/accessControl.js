import { getUsers } from '../database/utils.js'

function accessControl(req, res, next) {
	console.log('access control')

	// plocka ut api-nyckel:  url?key=....
	// validera nyckeln - finns den i databasen?
	// om ja, släpp igenom
	// annars, skicka statuskod

	let key = req.query?.key
	if( !key ) {
		console.log('Access denied! No key')
		res.sendStatus(401)  // 403 hade också varit okej
		return
	}

	let users = getUsers()
	let found = users.find(user => user.key === key)
	if( found ) {
		found.requestCount++
		console.log(`Access granted to user. This is request ${found.requestCount}.`)
		next()

	} else {
		console.log('Access denied! Bad key')
		res.sendStatus(401)
	}
}

export { accessControl }


// EJS: import, export
// CommonJS: require, module.exports
