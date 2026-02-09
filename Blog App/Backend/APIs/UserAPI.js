import exp from 'express'
import { authenticate, register } from '../Services/AuthService.js'

export const userRoute = exp.Router()

//Register User
userRoute.post('/users',async (req,res) => {
    //Get User Obj from req
    let userObj = req.body
    //Call Register
    const newUserObj = await register({...userObj, role:"USER"})
    //Send Response
    res.status(201).json({ message: "User Created", payload: newUserObj})
    
})

//Authenticate User
userRoute.post('/authenticate',async (req,res) => {
    //Get User Credentials Object
    let userCred = req.body
    //Call Authentication Service
    let {token, user} = await authenticate(userCred)
    //Save Token in HTTP Only Cookie
    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    //Send Response
    res.status(200).json({message:"Login Success",payload: user})
    
})
//Read all Articles
//Add comment to an article