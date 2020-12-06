// entry point for the server in backend
const express = require('express')
const products = require('./data/products')

const app = express()

// get route
app.get('/', (req, res) => {
    res.send('API is running....')
})

// api route
app.get('/api/products', (req,res) => {
    res.json(products)
})

// api route for id
app.get('/api/products/:id', (req, res) => {
    // finds a product with a specific id from the array of objects and compares that with the id from the url for a match
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log('Server running on port 5000'))

