import bcrypt from 'bcryptjs'

// follows the same data model we have for the users
const users = [
    {
        // admin user
        name: 'Admin User',
        email: 'admin@example.com',
        // hashes the password synchronously
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        // regular user
        name: 'John',
        email: 'john@example.com',
        password: bcrypt.hashSync('123456', 10)    
    },
    {
        name: 'Jane',
        email: 'jane@example.com',
        password: bcrypt.hashSync('123456', 10),
        // isAdmin: true
    }
]

export default users