let routes = require('express').Router()
const { authentication } = require('../../utils/authentication')
let studentController = require('./student.controller')

// add new User
routes.post('/addStudent', async (req,res) =>{
    let user = await studentController.addStudent(req.body)
    res.status(user.status).send(user)
})

routes.get('/getStudent', async (req, res) =>{
    let user = await studentController.getStudent(req.body)
    res.status(user.status).send(user)
})

// Get All User
routes.get('/getAllStudent', async (req, res) =>{
    let user = await studentController.getAllStudent(req.body)
    res.status(user.status).send(user)
})

module.exports = routes