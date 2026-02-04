import express from "express";
import { userApp } from "./APIs/userAPI.js";
import { productApp } from "./APIs/productAPI.js";
import { connect } from "mongoose";

const app = express();
const port = 4000;

async function connectdb() {
  try {
    await connect("mongodb://localhost:27017/ecomdb");
    console.log("DB connected");

    app.listen(port, () =>
      console.log("Server listening on port 4000...")
    );
  } catch (err) {
    console.log("Error in DB connection", err);
  }
}

connectdb();

app.use(express.json());

app.use("/userapi",userApp)
app.use("/prodapi", productApp);

// app.use((err,req,res,next)=>{

// })