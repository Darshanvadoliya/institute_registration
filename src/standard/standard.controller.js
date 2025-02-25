let standardService = require('./standard.service')

// add standard
let addStandard = async (data)=>{
    return await standardService.addStandard(data)
}

//view standard
let viewStandard = async (data)=>{
    return await standardService.viewStandard(data)
}

module.exports = {
    addStandard,
    viewStandard
}