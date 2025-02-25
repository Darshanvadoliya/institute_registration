let mediumService = require('./medium.service')

// add medium
let addMedium = async (data) =>{
    return await mediumService.addMedium(data)
}

// view medium
let viewMedium = async (data) =>{
    return await mediumService.viewMedium(data)
}

module.exports = {
    addMedium,
    viewMedium,
}