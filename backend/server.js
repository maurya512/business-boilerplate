// entry point for the server in backend
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'

dotenv.config()

connectDB()
const app = express()

// get route
app.get('/', (req, res) => {
    res.send('API is running.......')
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


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${5000}`))

