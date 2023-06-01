import express from 'express'

const router = express.Router()

/*
POST /

Vad behöver vi veta om användare, för att ge dem en API-nyckel?
Exempel: e-postadress
*/

router.post('/', (req, res) => {
	// Validera body: { email }  (sköts av middleware)
	// Generera en API key
	// Spara användare + API key i databasen
	// Svara med API key

	let email = req.body.email

	// API-nyckel ska vara ett unikt värde
	// Om man använder NeDB (eller MongoDB) så skapas ett ID när man lägger till ett dokument
	let doc = { email }  // lägg till denna i databasen
	let key = generatefakeApiKey()
	users.push({ email, key, requestCount: 0 })

	res.send({ key: key })
})

let users = []


function generatefakeApiKey() {
	// Slumpa en API-nyckel om man inte får en från databasen
	const allowed = '0123456789abcdef'
	let key = ''
	for( let i=0; i<12; i++ ) {
		let index = Math.floor(Math.random() * allowed.length)
		key += allowed[index]
	}
	return key
}

export default router
