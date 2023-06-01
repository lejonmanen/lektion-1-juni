// "import" kräver type=module i package.json
// "require" är commonJS, default i Node
import express from 'express'
//const express = require('express')

const app = express()
const port = 1337


// Middleware
app.use((req, res, next) => {
	// Logger - skriver ut information om alla inkommande request
	console.log(`${req.method}  ${req.url}`, req.body)
	next()
})


// Route handlers
app.get('/', (req, res) => {
	res.send('Hello from server')
})

app.all('*', (req, res) => {
	res.send('Not implemented yet... come back later')
})


app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`)
})
