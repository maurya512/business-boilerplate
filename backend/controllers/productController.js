import asyncHandler from 'express-async-handler'
import Product from '../modals/productModal.js'

// Fetch all products
// api/products
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found')
    }
})

export {
    getProductById,
    getProducts
}