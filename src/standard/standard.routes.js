let routes = require('express').Router()
let standardController = require('./standard.controller')
let { authentication } = require('../../utils/authentication')

// add standard
routes.post('/addStandard', authentication([1]), async (req,res) => {
    let standard = await standardController.addStandard(req.body)
    res.status(standard.status).send(standard)
})

// view standard
routes.get('/viewStandard', async (req, res) => {
    let standard = await standardController.viewStandard(req.body)
    res.status(standard.status).send(standard)
})

module.exports = routes