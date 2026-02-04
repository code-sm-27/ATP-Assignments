import exp  from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
config() //process.env

const app = exp()

//
app.use(exp.json())

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

    
})