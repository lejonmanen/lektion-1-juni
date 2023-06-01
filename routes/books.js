import express from 'express'

const router = express.Router()

/*
GET /
GET /:id
POST /
PUT /:id
DELETE /:id
*/


// app.get('/api/books', ......)
router.get('/', (req, res) => {
	res.status(200).send(books)  // Vi behöver inte skriva status(200) eftersom det är default
})

// GET /:id
router.get('/:id', (req, res) => {
	// Om id hade varit ett tal:
	// let id = parseInt(req.params.id)
	// let id = Number(req.params.id)
	
	let id = req.params.id  // id är en sträng
	// Validera id - görs i middleware-funktion
	console.log('Vi är i GET /:id, valideringen lyckades')
	res.send(books.find(book => book.id === id))
})

const books = [
	{
		"id": "1",
		"title": "The Hobbit",
		"author": "J.R.R. Tolkien",
		"year": 1937
	},
	{
		"id": "2",
		"title": "The Lord of the Rings: The Fellowship of the Ring",
		"author": "J.R.R. Tolkien",
		"year": 1954
	},
	{
		"id": "3",
		"title": "The Lord of the Rings: The Two Towers",
		"author": "J.R.R. Tolkien",
		"year": 1954
	},
	{
		"id": "4",
		"title": "The Lord of the Rings: The Return of the King",
		"author": "J.R.R. Tolkien",
		"year": 1955
	}
]



export default router
