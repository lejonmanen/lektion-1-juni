function validateBody(req, res, next) {
	// Body måste vara: { email }
	let maybeEmail = req.body?.email

	if( (typeof maybeEmail) === 'string' && maybeEmail.length > 4 ) {
		// En e-postadress kan inte vara hur kort som helst
		// (Kan behöva testas mera)
		console.log('Validate body: ok');
		next()

	} else {
		console.log('Validate body: bad request');
		res.sendStatus(400)
	}
}

export { validateBody }
