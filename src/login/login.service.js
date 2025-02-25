let { PrismaClient } = require('@prisma/client')
let prisma = new PrismaClient()
// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//  Login
let login = async (data) => {
    let resData = {
        status: 400,
        data: {
            message: 'Error'
        }
    }

    try {

        if (!data.email || !data.password) {
            resData = {
                status: 400,
                data: {
                    message: 'Email and Password is required'
                }
            }
        }

        let isAdmin = await prisma.admin.findFirst({
            where: {
                admin_email: data.email,
            }
        })

        if (!isAdmin) {
            resData = {
                status: 400,
                data: {
                    message: 'User not found'
                }
            }
        } else {
            // const machpassword = await bcrypt.compare(data.password, isUser.admin_password)
            // console.log("login pass =>",data.password);
            
            if (isAdmin.admin_password != data.password) {
                resData = {
                    status: 400,
                    data: {
                        message: 'Password is incorrect'
                    }
                }
            } else {
                const token = jwt.sign(
                    {data: isAdmin},
                    process.env.JWT_SECRET,
                    { expiresIn: '1d' }
                )
                resData = {
                    status: 200,
                    data: {
                        message: 'Login Success',
                        admin: isAdmin,
                        token: token
                    }
                }
            }
        }
        
    } catch (error) {
    resData = {
        status: 500,
        data: {
            message: 'Internal Server Error',
            error: error.message
        }
    }
}

return resData
}

module.exports = {
    login
}
