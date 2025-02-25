const jwt = require('jsonwebtoken')

let authentication = (role) =>{
    return (req, res, next) =>{
        const authHeader = req.headers['authentication']
        const token = authHeader

        if(!token){
            return res.status(400).json({
                status : 400,
                data:{
                    message: "Token Not Found.."
                }
            })
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded.data.role_id);
        
            if(role.includes(decoded.data.role_id)){
                req.user = decoded.data
                next();
            }else{
                return res.status(400).json({
                    status : 400,
                    data:{
                        message: "Access denied."
                    }
                })
            }
            
        } catch (error) {
            return res.status(400).json({
                status : 400,
                data:{
                    message: "Invalid Token..",
                    error: error.message
                }
            })
        }
    }
}

module.exports ={
    authentication
}