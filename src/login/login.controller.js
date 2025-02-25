let loginService = require('./login.service')

// Login
let login = async (data) => {
    return await loginService.login(data)
}

module.exports = {
    login
}