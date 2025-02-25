let routes = require('express').Router()
let boardController = require('./board.controller')
let {authentication} = require('../../utils/authentication')

// ADD Board

routes.post('/addBoard', authentication([1]), async (req,res) =>{
    let board = await boardController.addBoard(req.body)
    res.status(board.status).send(board)
})


// view board
routes.get('/viewBoard', async (req, res) =>{
    let board = await boardController.viewBoard(req.body)
    res.status(board.status).send(board)
})

module.exports = routes