
function validateBooksRoute(req, res, next) {
	// GET /:id
	// Om id är ok och motsvarar en bok: skicka tillbaka bok-objekt, status 200
	// Om id motsvarar en bok som inte finns: status 404
	// Om id är felaktigt: status 400
	console.log('Validate books route')
	console.log('request url:', req.url, req.params)
	if( req.method === 'GET' && req.url.length > 1 ) {
		console.log('Vi har en URL-parameter');
		let id = req.url.substring(1)  // hoppa över snedstreck
		if( idIsValid(id) ) {
			next()
		} else {
			res.sendStatus(400)
		}
	}
	else {
		// TODO
		next()
	}
}

function idIsValid(maybeId) {
	// TODO
}

export default validateBooksRoute
