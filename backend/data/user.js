import bcrypt from 'bcryptjs'
const users = [{
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ayush',
        email: 'ayush@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'vivek',
        email: 'vivek@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]
export default users