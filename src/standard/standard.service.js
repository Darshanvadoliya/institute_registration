let { PrismaClient } = require('@prisma/client');
const { lock } = require('./standard.routes');
let prisma = new PrismaClient();    

// add standard
let addStandard = async (data) => {
    let resData = {
        status : 400,
        data : {
            message: 'Error'
        }
    }

    try {

        let addStandard = await prisma.standards.create({data:data})

        resData = {
            status : 200,
            data:{
                message:'Standard add Success..',
                data:addStandard
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

// view standard
let viewStandard = async (data) => {
    let resData = {
        status : 400,
        data : {
            message: 'Error'
        }
    }

    try {
        let classCategory =  await prisma.classcategories.findFirst({
            where:{
                classcategories_nm: data.classCategory,
            },
            include:{
                standards: true
            }
        })

        if(!data || Object.keys(data).length === 0){
            resData = {
                status : 400,
                data : {
                    message: 'class category not found'
                }
            }
        }else if(!classCategory){
            resData = {
                status : 400,
                data : {
                    message: 'class category not found'
                }
            }
        }else{
            let viewStandard = await prisma.standards.findMany({
                where:{
                    categories_id: classCategory.id
                },
                select:{
                    standard: true
                }
            })

        resData = {
            status : 200,
            data:{
                message:'Standard view Success..',
                data:viewStandard
            }
        }
        }

        

    } catch (error) {
        console.log(error);
    }

    return resData
}

module.exports = {
    addStandard,
    viewStandard
}