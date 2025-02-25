let routes = require('express').Router()
let subjectController = require('./subject.controller')
let { authentication } = require('../../utils/authentication')

// add new subject
routes.post('/addSubject', authentication([1]),  async (req,res) => {
    let subject = await subjectController.addSubject(req.body)
    res.status(subject.status).send(subject)
})

// view subject
routes.get('/viewSubject',  async (req, res) => {
    let subject = await subjectController.viewSubject(req.body)
    res.status(subject.status).send(subject)
})

module.exports = routes
