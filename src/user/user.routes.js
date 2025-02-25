let routes = require('express').Router()
const { authentication } = require('../../utils/authentication')
let userController = require('./user.controller')

// add new User
routes.post('/addUser', async (req,res) =>{
    let user = await userController.addUser(req.body)
    res.status(user.status).send(user)
})

routes.get('/getUser', async (req, res) =>{
    let user = await userController.getUser(req.body)
    res.status(user.status).send(user)
})

// Get All User
routes.get('/getAllUser', async (req, res) =>{
    let user = await userController.getAllUser(req.body)
    res.status(user.status).send(user)
})

module.exports = routes