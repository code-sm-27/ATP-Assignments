import exp from 'express'
import { UserTypeModel } from '../Models/UserModel.js'
import { ArticleModel } from '../Models/ArticleModel.js'
import { register, authenticate } from '../Services/AuthService.js'
import { checkAuthor } from '../Middlewares/checkAuthor.js'

export const authorRoute = exp.Router()

//Register User
authorRoute.post('/users',async (req,res) => {
    //Get User Obj from req
    let userObj = req.body
    //Call Register
    const newUserObj = await register({...userObj, role:"AUTHOR"})
    //Send Response
    res.status(201).json({ message: "Author Created", payload: newUserObj})
    
})
//Authenticate User
authorRoute.post('/authenticate',async (req,res) => {
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
//Create Article
authorRoute.post('/articles', checkAuthor, async (req,res) => {
    //Get Article from Request
    let articleDoc = req.body
    //Create Article Document
    let newArticleObj = new ArticleModel(articleDoc)
    //Save the Article
    let createdArticleDoc = await newArticleObj.save()
    //Send the Response
    res.status(201).json({message:"Article Created",payload:createdArticleDoc})

    
})
//Read Articles of Author
authorRoute.get("/articles/:authorId", checkAuthor, async (req,res) => {
    //Read Articles by this Author
    let aid = req.params.authorId
    let articles = await ArticleModel.find({author: aid, isArticleActive: true}).populate("author","firstName email")
    //Send Response
    res.status(201).json({message:"List of Articles are:-", payload:articles})
})
//Edit Article
authorRoute.put("/articles",checkAuthor, async (req,res) => {
    // Get the updated article
    let {author,articleId,title,category,content} = req.body
    // Find the Article
    let checkArticle = ArticleModel.findOne({_id: articleId,author: author})
    if(!checkArticle){
        res.status(401).json({message:"Article is Not Found"})    
    }
    // update the article
    let updatedArticle = await ArticleModel.findByIdAndUpdate(articleId,{
        $set:{title,category,content}},{new:true}
    )
    // Send the response
    res.status(201).json({message: "Article Updated",payload: updatedArticle})

    
})
//Delete (Soft Delete) Article
authorRoute.delete('/author/:authorId/article/:articleId', checkAuthor, async (req,res) => {
    // Get Author Id and Article Id to validate the required article
    let autId = req.params.authorId
    let artId = req.params.articleId
    // Find the required article
    let findArticle = ArticleModel.findOne({_id: artId, author: autId})
    if(!findArticle){
        res.status(401).json({message:"Article is Not Found"})
    }
    // Soft Delete the Article by updating the isArticleActive attribute
    await ArticleModel.findByIdAndUpdate(artId,{$set:{isArticleActive: false}},{new:true})
    // Send the Response
    res.status(201).json({message:"Article Deleted"})

})