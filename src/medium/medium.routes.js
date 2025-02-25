let routes = require('express').Router()
let mediumController = require('./medium.controller')
let {authentication} = require('../../utils/authentication')


// add medium 
routes.post('/addMedium', authentication([1]), async (req,res) =>{
    let board = await mediumController.addMedium(req.body)
    res.status(board.status).send(board)
})

// view medium
routes.get('/viewMedium',  async (req, res) =>{
    let board = await mediumController.viewMedium(req.body)
    res.status(board.status).send(board)
})  

module.exports = routes