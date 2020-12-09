import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        // user that buys the product
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        // array of order items
        orderItems: [
            {
                name: { type: String, required: true },
                qty: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                // the product that's to be added to the cart
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product'
                }
            }
        ],
        // user's shipping address
        shippingAddress: {
            // address
            address: {
                type: String, required: true
            },
            // city
            city: {
                type: String, required: true
            },
            // zip code
            zipCode: {
                type: Number, required: true
            },
            // country
            country: {
                type: String, required: true
            }
        },
        // user's payment method
        paymentMethod: {
            type: String,
            required: true
        },
        // payment result
        paymentResult: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String }
        },
        // taxes on the products
        taxPrice: {
            type: Number,
            required: true,
            default: 0.0
        },
        // shipping price set by the admin
        shippingPrice: {
            type: Number,
            required: true,
            default: 0.0
        },
        // total price including taxes and shipping
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0
        },
        // is the product paid for
        isPaid: {
            type: Boolean,
            required: true,
            default: false
        },
        // when the product was bought
        paidAt: {
            type: Date,
        },
        // delivered status
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        // when the product was delivered
        deliveredAt: {
            type: Date,
        },
    },
    {
        timeStamps: true,
    }
)

const Order = mongoose.model('Order', orderSchema)

export default Order