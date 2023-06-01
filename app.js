// "import" kräver type=module i package.json
// "require" är commonJS, default i Node
import express from 'express'
//const express = require('express')
import cors from 'cors'
import validateBooksRoute from './middleware/validateBooks.js'
import booksRouter from './routes/books.js'

const app = express()
const port = 1337


// Middleware
app.use( cors() )
app.use((req, res, next) => {
	// Logger - skriver ut information om alla inkommande request
	console.log(`${req.method}  ${req.url}`, req.body)
	next()
})
// Serva innehållet i public-mappen (statiska filer)
app.use( express.static('public') )

app.use( '/api/books', validateBooksRoute )
app.use( '/api/books', booksRouter )

// Route handlers
// app.get('/', (req, res) => {
// 	// res.send('Hello from server')
// 	res.sendFile('public/index.html')
// })

app.all('*', (req, res) => {
	res.send('Not implemented yet... come back later')
})


app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})
