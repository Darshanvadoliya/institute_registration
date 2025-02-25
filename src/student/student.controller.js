let studentService = require('./student.services')
let studentValidation = require('./student.validation')

let addStudent = async (data) =>{
    let valid = await studentValidation.validation(data)
    if(valid.status){
        return await studentService.addStudent(data)
    }else{
        valid.status = 400
        return valid
    }
}

let getStudent = async (data) =>{
    return await studentService.getStudent(data)
}

// Get All User
let getAllStudent = async (data) =>{
    return await studentService.getAllStudent(data)
}

module.exports = {
    addStudent,
    getStudent,
    getAllStudent
}   