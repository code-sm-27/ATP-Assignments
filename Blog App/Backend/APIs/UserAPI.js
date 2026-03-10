import exp from 'express'
import { authenticate, register } from '../Services/AuthService.js'
import { ArticleModel } from '../Models/ArticleModel.js'
import { verifyToken } from '../Middlewares/verifyToken.js'

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
//Read all Articles
userRoute.get('/articles',verifyToken("USER") ,async (req,res) => {
    let articles = await ArticleModel.find({isArticleActive: true})
    res.status(200).json({message:"Articles:- ", payload: articles})
})
//Add comment to an article
userRoute.post('/articles',verifyToken("USER") ,async (req,res) => {
    let {articleId, comment} = req.body
    // Check User if the userId mentioned in the comment body is same as logged in user
    // if (user !== req.user.userId)
    // {
    //     return res.status(403).json({message: "Forbidden"})
    // }
    let userID = req.user.userId
    let articleDoc = await ArticleModel.findById(articleId)
    if(!articleDoc){
        res.status(401).json("Requested Article is not Found")
    }
    let commentedArticle = await ArticleModel.findByIdAndUpdate(articleId,{$push:
        {comments:{user: userID,comment: comment}}
    },{new:true, runValidators: true})
    
    res.status(201).json({message:"Article Commented Successfully",payload: commentedArticle})
    
})
