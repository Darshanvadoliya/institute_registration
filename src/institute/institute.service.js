let { PrismaClient } = require('@prisma/client');
const e = require('express');
let prisma =  new PrismaClient

// Add Institute
let addInstitute = async (data) =>{
    let resData = {
        status : 400,
        data : {
            message: 'Error'
        }
    }

    try {

        let addInstitute = await prisma.institute.create({data:data})

        resData = {
            status : 200,
            data:{
                message:'institute add Success..',
                data:addInstitute
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

// viwe institute
let getInstitute = async () =>{
    let resData = {
        status : 400,
        data : {
            message: 'Error'
        }
    }

    try {
        let getInstitute = await prisma.institute.findMany()

        resData = {
            status : 200,
            data:{
                message:'institute add Success..',
                data:getInstitute
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

module.exports = {
    addInstitute,
    getInstitute,
}