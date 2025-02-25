let routes = require('express').Router()
let loginController = require('./login.controller')

routes.post('/login', async (req, res) => {
    let login =  await loginController.login(req.body)
    res.status(login.status).send(login)
})

module.exports = routes