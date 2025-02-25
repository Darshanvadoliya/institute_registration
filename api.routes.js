let routes = require('express').Router()

routes.use('/institute', require('./src/institute/institute.routes'))
routes.use('/board', require('./src/board/board.routes'))
routes.use('/medium', require('./src/medium/medium.routes'))
routes.use('/classCategory', require('./src/class/classcategory.routes'))
routes.use('/standard', require('./src/standard/standard.routes'))
routes.use('/subject', require('./src/subjects/subject.routes'))
routes.use('/user', require('./src/user/user.routes'))
routes.use('/login', require('./src/login/login.routes'))

module.exports = routes