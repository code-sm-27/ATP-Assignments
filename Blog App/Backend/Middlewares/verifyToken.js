import { config } from 'dotenv'
import jwt from 'jsonwebtoken'
config()

export const verifyToken = async (req,res,next) => {
    // Read Token from Request
    let token = req.cookies.token
    console.log("Token: ",token)
    if(!token){
        return res.status(400).json({message:"Unauthorized Request. Please Login"})
    }
    // Verify the validity of the token(Decoding the Token)
    let decodedToken = jwt.verify(token,process.env.JWT_SECRET)
    
    //Forward Request to the next middleware/route
    next()
}