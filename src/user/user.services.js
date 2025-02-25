let { PrismaClient } = require('@prisma/client');
let prisma = new PrismaClient();
const bcrypt = require('bcrypt')

let addUser = async (data) => {
    let resData = {
        status: 400,
        data: {
            message: "Error"
        }
    }

    try {
        const slet = 10
        const hashpassword = await bcrypt.hash(data.user_password, slet)
        data.user_password = hashpassword
        // console.log("data = ", data.subject_id);

        // let ids = data.subjects.connect.map(item => item.id).join('')
        // console.log(Number(ids));
        // subject_id = Number(ids)

        let isUser = await prisma.user.findFirst({
            where: {
                user_email: data.user_email
            }
        })

        if (isUser) {
            resData = {
                status: 400,
                data: {
                    message: "User Already Exist.."
                }
            }
        } else {
            let addUser = await prisma.user.create({
                data: data,
            })

            // const subjectIds = req.body.usersubjects.create.map(item => item.subjects.connect.id);

            // console.log(subjectIds); // Output: [1, 2]


            // await prisma.usersubjects.createMany({
            //     data: subjectIds.map(subjectId => ({
            //         user_id: addUser.id, // Ensure `addUser.id` exists before this step
            //         subject_id: subjectId
            //     }))
            // });

            resData = {
                status: 200,
                data: {
                    message: "User Create SuccessFully..",
                    data: addUser,
                }
            }
        }


    } catch (error) {
        console.log("error", error);
        resData = {
            status: 400,
            error: error.message
        }
    }
    return resData
}

// get user
let getUser = async (data) => {
    let resData = {
        status: 400,
        data: {
            message: "Error"
        }
    }

    try {
        let getUser = await prisma.user.findMany({
            where: data,
            select: {
                user_name: true,
                user_email: true,
                institute: { select: { type: true } },
                board: { select: { board_name: true } },
                mediums: { select: { mediums_name: true } },
                classcategories: { select: { classcategories_nm: true } },
                standards: { select: { standard: true } },
                // subjects: { select: { subject_name: true } },
            }
        })
        console.log(data.id);
        
        let usersubjects = await prisma.usersubjects.findMany({
            where: {
                user_id: data.id
            },
            select:{
                subjects:{
                    select:{
                        subject_name:true
                    }
                }
            }
        })

        if (getUser.length === 0) {
            resData = {
                status: 400,
                data: {
                    message: "User Not Found.."
                }
            }
        } else {
            resData = {
                status: 200,
                data: {
                    message: "User Create SuccessFully..",
                    data: getUser,
                    subject: usersubjects
                }
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}

// gWT aLL uSER

let getAllUser = async () => {
    let resData = {
        status: 400,
        data: {
            message: "Error"
        }
    }

    try {
        let getAllUser = await prisma.user.findMany({
            select: {
                user_name: true,
                user_email: true,
                institute: { select: { type: true } },
                board: { select: { board_name: true } },
                mediums: { select: { mediums_name: true } },
                classcategories: { select: { classcategories_nm: true } },
                standards: { select: { standard: true } },
            }
        })

        if (getAllUser.length === 0) {
            resData = {
                status: 400,
                data: {
                    message: "User Not Found.."
                }
            }
        } else {
            resData = {
                status: 200,
                data: {
                    message: "User Create SuccessFully..",
                    data: getAllUser,
                }
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}
module.exports = {
    addUser,
    getUser,
    getAllUser
}
