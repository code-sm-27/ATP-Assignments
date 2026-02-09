import exp  from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import { userRoute } from './APIs/UserAPI.js'
import { authorRoute } from './APIs/AuthorAPI.js'
import { adminRoute } from './APIs/AdminAPI.js'
config() //process.env

const app = exp()

//
app.use(exp.json())
app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute)

// Connecting to DB
const connectDB = async()=>{

    try
    {
        await connect(process.env.DB_URL)
        console.log("DB Connection Succesful")
        // Start HTTP Server
        app.listen(process.env.PORT,()=>console.log("Server Started"))
    }
    catch(err)
    {
        console.log("Error in DB Connection",err)
    }

}
connectDB()

//Error Handling Middleware

app.use((err,req,res,next)=>{
    console.log("error",err)
    res.json({message:"error",reason:err.message})
    
})