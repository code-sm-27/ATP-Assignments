// Create HTTP Server
// Add Body Parser Middleware
// Forward Req to UserAPI if path starts with /user-api
// Connect to DB
// Add Error Handling Middleware

import exp from 'express'
import {connect} from 'mongoose'
import {config} from 'dotenv'
import { userApp } from './UserAPI.js'
import cors from 'cors'
config()

const app = exp()
// Add CORS

app.use(exp.json())

app.use(cors({
  origin:['http://localhost:5173']
}))

app.use('/user-api',userApp)

const connectDB = async()=>{
    try
    {
    await connect(process.env.DB_URL)
    app.listen(process.env.PORT,()=>console.log("Server Started"))
    }
    catch(err)
    {
        console.log("Error in DB Connection",err)
    }
}
connectDB()
app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: err.message,
  });
});
