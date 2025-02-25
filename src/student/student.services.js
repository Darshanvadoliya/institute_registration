let { PrismaClient } = require('@prisma/client');
let prisma = new PrismaClient();
const bcrypt = require('bcrypt')

let addStudent = async (data) => {
    let resData = {
        status: 400,
        data: {
            message: "Error"
        }
    }

    try {
        const slet = 10
        const hashpassword = await bcrypt.hash(data.student_password, slet)
        data.student_password = hashpassword
        // console.log("data = ", data.subject_id);

        // let ids = data.subjects.connect.map(item => item.id).join('')
        // console.log(Number(ids));
        // subject_id = Number(ids)

        let isUser = await prisma.student.findFirst({
            where: {
                student_email: data.student_email
            }
        })

        if (isUser) {
            resData = {
                status: 400,
                data: {
                    message: "student Already Exist.."
                }
            }
        } else {
            let addUser = await prisma.student.create({
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
                    message: "student Create SuccessFully..",
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
let getStudent = async (data) => {
    let resData = {
        status: 400,
        data: {
            message: "Error"
        }
    }

    try {
        let getUser = await prisma.student.findMany({
            where: data,
            select: {
                student_name: true,
                student_email: true,
                institute: { select: { type: true } },
                board: { select: { board_name: true } },
                mediums: { select: { mediums_name: true } },
                classcategories: { select: { classcategories_nm: true } },
                standards: { select: { standard: true } },
                // subjects: { select: { subject_name: true } },
            }
        })
        // console.log(data.id);
        
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
                    message: "student Not Found.."
                }
            }
        } else {
            resData = {
                status: 200,
                data: {
                    message: "student get SuccessFully...",
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

let getAllStudent = async (data) => {
    let resData = {
        status: 400,
        data: {
            message: "Error"
        }
    }

    try {
        let getAllUser = await prisma.student.findMany({
            select: {
                student_name: true,
                student_email: true,
                institute: { select: { type: true } },
                board: { select: { board_name: true } },
                mediums: { select: { mediums_name: true } },
                classcategories: { select: { classcategories_nm: true } },
                standards: { select: { standard: true } },
            }
        })

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
                    message: "all Student",
                    data: getAllUser,
                    subject:usersubjects
                }
            }
        }

    } catch (error) {
        console.log(error);
    }

    return resData
}
module.exports = {
    addStudent,
    getStudent,
    getAllStudent
}
