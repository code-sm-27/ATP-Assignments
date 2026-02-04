import exp from 'express'
import { usermodel } from "./models/userModel.js";

export const userApp = exp.Router()


userApp.post('/users', async (req, res) => {

    let newuser = req.body
    let newUserDoc= new usermodel(newuser)
    let createduser = await newUserDoc.save()
    res.status(201).json({ message: "user created", user: createduser })
})
//create user api
userApp.get('/users', async (req, res) => {
    let users = await usermodel.find()
    //send res
    res.status(200).json({ message: "users", users })
})

//read user by object
userApp.get('/users/:id', async (req, res) => {
    let objid = req.params.id
    let user = await usermodel.findById(objid)
    res.status(200).json({ message: "user found", payload: user })

    
})

//update user

userApp.put("/users/:id", async (req,res) => {
    
    let objId = req.params.id
    let modifiedUser = req.body

    let latestUser = await usermodel.findByIdAndUpdate(objId,
        { $set: { ...modifiedUser} },
        { new: true}
    );

    res.status(200).json({message: "user modified",payload: latestUser})
})

//deleteUser

userApp.delete("/users/:id",async (req,res) => {
    
    let objId = req.params.id

    let deletedUser = await usermodel.findByIdAndDelete(objId)

    res.status(200).json({message:"User Removed",payload:deletedUser})
})