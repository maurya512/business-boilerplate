import jwt from 'jsonwebtoken'

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        // expires in 60 days
        expiresIn: '60d'
    })
}

export default generateToken