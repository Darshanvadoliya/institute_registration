let routes = require('express').Router()
let classCategoryController = require('./classcategory.controller')
let { authentication } = require('../../utils/authentication')
// add class category
routes.post('/addClassCategory', authentication([1]), async (req,res) =>{
    let classCategory = await classCategoryController.addClassCategory(req.body)
    res.status(classCategory.status).send(classCategory)
})

// view class category
routes.get('/viewClassCategory', async (req, res) =>{
    let classCategory = await classCategoryController.viewClassCategory(req.body)
    res.status(classCategory.status).send(classCategory)
})

module.exports = routes