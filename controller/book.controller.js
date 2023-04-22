const express = require('express')
const router = express.Router()

const Book = require('../models/book.model')
const {generateCrudMethods} = require ('../services')
const bookCrud = generateCrudMethods(Book)
const { validateDbId, raiseRecord404dError } = require ('../middlewares')


router.get('/',(req,res,next)=>{

bookCrud.getAll()
.then(data =>res.send(data))
.catch(err => next(err))
})

router.get('/:id', validateDbId ,(req,res,next)=>{
   
    bookCrud.getById( req.params.id)
       .then(data => {
        if(data)
          res.send(data)
        else 
        raiseRecord404dError(req,res)
       })
       .catch(err => next(err))
})    

router.post('/',(req,res,next)=>{

    const newRecord = {
        bookName: req.body.bookName,
        bookPages: req.body.bookPages,
    }
    bookCrud.create(newRecord)
            .then(data => res.status(201).json(data))
            .catch(err => next(err))
})

router.put('/:id', validateDbId ,(req,res)=>{ 
        bookCrud.update(req.params.id,req.body)
        .then(data => {
            if(data)
              res.send(data)
            else 
            raiseRecord404dError(req,res)
           })
           .catch(err => next(err))
    })


router.delete('/:id', validateDbId ,(req,res)=>{ 

    bookCrud.delete(req.params.id)
    .then(data => {
        if(data)
          res.send(data)
        else 
        raiseRecord404dError(req,res)
       })
       .catch(err => next(err))
    })
           
module.exports= router