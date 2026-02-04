import express from "express";
// import { userApp } from "./userAPI.js";
import { productApp } from "./productAPI.js";
import { connect } from "mongoose";

const app = express();

// middleware FIRST
app.use(express.json());

// mount router
app.use("/prodapi", productApp);

async function connectdb() {
  try {
    await connect("mongodb://127.0.0.1:27017/db");
    console.log("DB connected");

    app.listen(4000, () =>
      console.log("Server listening on port 4000...")
    );
  } catch (err) {
    console.log("Error in DB connection", err);
  }
}

connectdb();