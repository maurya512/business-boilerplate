import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../modals/productModal.js'

const router = express.Router()

// Fetch all products
// GET /api/products
router.get('/', asyncHandler(async (req, res) => {
    // finds all of the products from the model
    const products = await Product.find({})
    res.json(products)
}))

// Fetch single product
// GET /api/products/:id
router.get('/:id',  asyncHandler(async(req, res) => {
    // if a product id matches with an id in the url store that product into a variable
    const product = await Product.findById(req.params.id)

    // if a product is found 
    if(product) {
        // return the prodcut
    res.json(product)
    }
    // show an error
    else {
        res.status(404)
        throw new Error('Product not found')
    }
}))

export default router