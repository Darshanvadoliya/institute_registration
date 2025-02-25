let { PrismaClient } = require('@prisma/client')
let prisma = new PrismaClient()

// add medium
let addMedium = async (data) => {
    let resData = {
        status: 400,
        data: {
            message: 'Error'
        }
    }

    try {

        let addMedium = await prisma.mediums.create({ data: data })

        resData = {
            status: 200,
            data: {
                message: 'Medium add Success..',
                data: addMedium
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

// view medium
let viewMedium = async (data) => {
    let resData = {
        status: 400,
        data: {
            message: 'Error'
        }
    }

    try {
        let board = await prisma.board.findMany({
            where: {
                board_name: data.board
            }
        })
        if (!data || data == undefined || data == null) {
            resData = {
                status: 400,
                data: {
                    message: 'board not provide'
                }
            }
        } else if (board.length === 0) {
            resData = {
                status: 400,
                data: {
                    message: 'board not found'
                }
            }
        } else {
            let viewMedium = await prisma.mediums.findMany()

            resData = {
                status: 200,
                data: {
                    message: 'Medium add Success..',
                    data: viewMedium
                }
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

module.exports = {
    addMedium,
    viewMedium,
}