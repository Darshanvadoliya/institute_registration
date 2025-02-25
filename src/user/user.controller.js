let userService = require('./user.services')
let userValidation = require('./user.validation')

let addUser = async (data) =>{
    let valid = await userValidation.validation(data)
    if(valid.status){
        return await userService.addUser(data)
    }else{
        valid.status = 400
        return valid
    }
}

let getUser = async (data) =>{
    return await userService.getUser(data)
}

// Get All User
let getAllUser = async (data) =>{
    return await userService.getAllUser(data)
}

module.exports = {
    addUser,
    getUser,
    getAllUser
}   