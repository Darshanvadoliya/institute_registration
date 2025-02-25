let { PrismaClient } = require('@prisma/client');
let prisma = new PrismaClient

let addBoard = async (data) => {
    let resData = {
        status: 400,
        data: {
            message: 'Error'
        }
    }

    try {
        let addBoard = await prisma.board.create({ data: data })

        resData = {
            status: 200,
            data: {
                message: 'Board add Success..',
                data: addBoard
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

// view board
let viewBoard = async (data) => {
    let resData = {
        status: 400,
        data: {
            message: 'Error'
        }
    }

    try {

        let institute = await prisma.institute.findFirst({
            where: {
                type: data.institute
            },
            include :{
                board : true
            }
        })

        if (!data || data.institute === '') {
            resData = {
                status: 400,
                data: {
                    message: 'Institute is required'
                }
            }
        }else if(institute.length === 0){
            resData = {
                status: 400,
                data: {
                    message: 'Institute not found'
                }
            }
        }
        else {
            let viewBoard = await prisma.board.findMany({
                where:{
                    institute_id : institute.id
                },
                select:{
                    board_name: true
                }
            })
            
            resData = {
                status: 200,
                data: {
                    message: 'Board add Success..',
                    data: viewBoard
                }
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

module.exports = {
    addBoard,
    viewBoard
}
