let { PrismaClient } = require('@prisma/client')
let prisma = new PrismaClient()

// add class category
let addClassCategory = async (data) =>{
    let resData = {
        status : 400,
        data : {
            message: 'Error'
        }
    }

    try {

        let addClassCategory = await prisma.classcategories.create({data:data})

        resData = {
            status : 200,
            data:{
                message:'Class Category add Success..',
                data:addClassCategory
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

// view class category
let viewClassCategory = async (data) =>{
    let resData = {
        status : 400,
        data : {
            message: 'Error'
        }
    }

    try {

        let medium = await prisma.mediums.findMany({
            where:{
                mediums_name:data.medium
            }
        })
        
        if(!data || data.medium === ''){
            resData = {
                status : 400,
                data : {
                    message: 'Medium is required'
                }
            }
        }else if(medium.length === 0 ){
            resData = {
                status : 400,
                data : {
                    message: 'Medium not found'
                }
            }
        }
        else{
            let viewClassCategory = await prisma.classcategories.findMany()
    
            resData = {
                status : 200,
                data:{
                    message:'Class Category add Success..',
                    data:viewClassCategory
                }
            }
        }


    } catch (error) {
        console.log(error);
    }

    return resData
}

module.exports = {
    addClassCategory,
    viewClassCategory
}