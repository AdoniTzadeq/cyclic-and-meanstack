const mongoose= require('mongoose')


module.exports= mongoose.model('book', {

    bookName: {type: String} ,
    bookPages: { type: String},
})
