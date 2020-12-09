import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './modals/userModal.js'
import Product from './modals/productModal.js'
import Order from './modals/orderModal.js'
import connectDB from './config/db.js'

// config the dotenv
dotenv.config()

// make a connection to the db
connectDB()

// the function to import data from the db
const importData = async () => {
    try {
        // delete everything
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // import the users and set them in a an array
        const createdUsers = await User.insertMany(users)

        // the first id in users' model is admin
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        // imports the data from the database along with the admin user
        await Product.insertMany(sampleProducts)

        // error check
        console.log('Data Imported!')
        // exit the process
        process.exit()
    } catch (error) {
        // error check
        console.log(`${error}`)
        // exit the process with error code
        process.exit(1)
    }
}

// a function to destroy the data from the database
const destroyData = async () => {
    try {
        // delete everything
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // error check
        console.log('Data Destroyed!')
        // exit the process
        process.exit()
    } catch (error) {
        // error check
        console.log(`${error}`)
        // exit the process with error code
        process.exit(1)
    }
}

// calling the functions with if-else
if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}