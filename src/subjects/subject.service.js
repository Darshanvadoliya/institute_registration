let { PrismaClient } = require('@prisma/client')
let prisma = new PrismaClient()

// add subject
let addSubject = async (data) => {
    let resData = {
        status : 400,
        data : {
            message: 'Error'
        }
    }

    try {

        let addSubject = await prisma.subjects.create({data:data})

        resData = {
            status : 200,
            data:{
                message:'Subject add Success..',
                data:addSubject
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

// view subject
let viewSubject = async (data) => {
    let resData = {
        status : 400,
        data : {
            message: 'Error'
        }
    }

    try {

        let viewSubject = await prisma.subjects.findMany({})

        resData = {
            status : 200,
            data:{
                message:'Subject add Success..',
                data:viewSubject
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

module.exports = {
    addSubject,
    viewSubject
}