const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');
app.use(express.static(`./dist/frontendlibrary`));


const connectDb = require('./db.js')
const bookRoutes = require('./controller/book.controller.js')
const { errorHandler } = require('./middlewares')
const app = express()
//middleware
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api/books',bookRoutes)

app.use(errorHandler)
app.get(`/*`, function(req, res) { 
    res.sendFile(path.join(__dirname + 
    '/dist//frontendlibrary/index.html'));}); 

connectDb()
    .then(() => {
        console.log('db connection succeeded.')
        app.listen(8754,
            () => console.log('server started at 8754.'))
    })
    .catch(err => console.log(err))