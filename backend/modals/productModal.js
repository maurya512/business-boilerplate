import mongoose from 'mongoose'

// review schema
const reviewSchema = mongoose.Schema({
    // name of the reviewer
    name: {
        type: String,
        required: true,
    },
    // rating they provided
    rating: {
        type: Number,
        required: true,
    },
    // review they provided
    comment: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)

const productSchema = mongoose.Schema(
    {
        // which user created what kind of product
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        // name of the user
        name: {
            type: String,
            required: true,
        },
        // image of the product
        image: {
            type: String,
            required: true,
        },
        // brand of the product
        brand: {
            type: String,
            required: true,
        },
        // category of the product
        category: {
            type: String,
            required: true,
        },
        // descriptio of the product
        description: {
            type: String,
            required: true,
        },
        // reviews of the product
        reviews: [reviewSchema],
        // average rating of the product
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        // total number of reviews
        numReviews: {
            type: Number,
            required: true,
            default: 0,
        },
        // price of the product
        price: {
            type: Number,
            required: true,
        },
        // total inventory of the product
        countInStock: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        // when the inventory was last updated
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema)

export default Product