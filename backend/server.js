// entry point for the server in backend
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import products from './data/products.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()
const app = express()

// get route
app.get('/', (req, res) => {
    res.send('API is running.......')
})

app.use('/api/products', productRoutes)

// // custom error handling for 404 not found
app.use(notFound)

// custom error handling for 500 status code
app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${5000}`))

