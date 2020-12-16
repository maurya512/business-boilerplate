import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../modals/userModal.js'

const protect = asyncHandler(async (req, res, next) => {
    let token
    console.log(req.headers.authorization)

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    {
        try {
        token = req.headers.authorization.split(' ')[1]
        // check if a token was found
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // gets the decoded id and stores it in a user's id, - password
        req.user = await User.findById(decoded.id).select('-password')
        console.log(decoded)
        } catch(error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized. Token failed')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not Authorized. No token')
    }
})

export { 
    protect
}