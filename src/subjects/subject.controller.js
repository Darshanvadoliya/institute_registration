let subjectService = require('./subject.service')

// add subject
let addSubject = async (data) =>{
    return await subjectService.addSubject(data)
}

// view subject
let viewSubject = async (data) =>{
    return await subjectService.viewSubject(data)
}

module.exports = {
    addSubject,
    viewSubject
}