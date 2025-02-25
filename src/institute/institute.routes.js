let routes = require('express').Router()
let instituteController = require('./institute.controller')
let {authentication} = require('../../utils/authentication')

routes.post('/addInstitute', authentication([1]), async (req,res) =>{
    let institute = await instituteController.addInstitute(req.body)
    res.status(institute.status).send(institute)
})

routes.get('/getInstitute',  async (req, res) =>{
    let institute = await instituteController.getInstitute(req.body)
    res.status(institute.status).send(institute)
})

module.exports = routes