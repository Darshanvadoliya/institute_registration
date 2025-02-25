
let instituteService = require('./institute.service')

// Add institute
let addInstitute = async (data) =>{
    return await instituteService.addInstitute(data)
}

// viwe institute
let getInstitute = async (data) =>{
    return await instituteService.getInstitute(data)
}

module.exports = {
    addInstitute,
    getInstitute,
}