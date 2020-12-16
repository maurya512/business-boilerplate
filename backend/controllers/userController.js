import asynchandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../modals/userModal.js'

// authenticate the user by validating the email and password
// send back some data, later send back a token
const authUser = asynchandler(async (req, res) => {
    const { email, password } = req.body
    // res.send({email, password})

    // verifies if the email exists in the db
    const user = await User.findOne({ email })

    // if the email is found verify that password is matched
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})

// desc - register a new user
// route - POST /api/users
// access - Public
const registerUser = asynchandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({email})

    // check if the user exists
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    // check if the user was created 
    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
        }
        else {
            res.status(400)
            throw new Error('Invalid User data')
        }
    })

// GET user profile
// GET api/users/profile
// private route

const getUserProfile = asynchandler(async (req, res) => {
    const user = await User.findById(req.user_id)
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user, email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User not found')
    }
    res.send('Success')
})

export { authUser, getUserProfile, registerUser }