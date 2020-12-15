import asynchandler from 'express-async-handler'
import User from '../modals/userModal.js'

// authenticate the user by validating the email and password
// send back some data, later send back a token
const authUser = asynchandler(async (req, res) => {
    const { email, password } = req.body
    // res.send({email, password})

    // verifies if the email exists in the db
    const user = await User.findOne({email})

    // if the email is found verify that password is matched
    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: null
        })
    }
    else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})

export { authUser }