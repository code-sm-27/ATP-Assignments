// Create mini-express app
// USER API ROUTES
// Create User

import exp from 'express'
import { UserModel } from '././UserModel.js'

export const userApp = exp.Router()
// Create User
userApp.post('/users',async (req,res) => {
    // Get New User
    let newUser = req.body
    // Create User Document
    const userDoc = new UserModel(newUser)
    // Save New User
    await userDoc.save()
    // Send Res
    res.status(201).json({message:"User Created",payload: userDoc})  
})
// Read All Users
userApp.get('/users',async(req,res)=>{
    let users = await UserModel.find({status:true})
    res.status(200).json({message:"List of Users are:- ",payload: users})
})
// Read a User by ID
userApp.get('/user/:id',async (req,res) => {
    let user = await UserModel.findById(req.params.id)
    if(!user || user.status === false)
    {
        return res.status(404).json({message:"User Not Found"})
    }
    res.status(200).json({message:"User Details:-",payload: user})
})
// Delete a User by ID
userApp.delete('/user/:id',async (req,res) => {
    let uid = req.params.id
    let user = await UserModel.findByIdAndUpdate(uid,{$set:{status:false}})
    if(!user || user.status === false)
    {
        return res.status(404).json({message:"User Not Found"})
    }
    
    res.status(200).json({message:"User Removed"})
})
// Activate User(Change Status to true)
// PUT(Complete change) and PATCH(Partial change)
userApp.patch('/user/:id',async (req,res) => {
    let uid = req.params.id
    let user = await UserModel.findByIdAndUpdate(uid,{$set:{status:true}})
    let updatedUser = await UserModel.findById(uid)
    if(!user)
    {
        return res.status(404).json({message:"User Not Found"})
    }
    
    res.status(200).json({message:"User Activated",payload: updatedUser})
    
})
// Update User by ID
