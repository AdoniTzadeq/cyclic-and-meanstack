const mongoose= require('mongoose')
const dbUri= 'mongodb+srv://another:DfeJkQbMBRWj0ier@users.sh078e0.mongodb.net/?retryWrites=true&w=majority'


module.exports = () => {
    return mongoose.connect(dbUri)
}