import exp from 'express'
import { productModel } from "../models/productModel.js";

export const productApp = exp.Router()

// Creating a Product
productApp.post('/products', async (req, res) => {

    let newProduct = req.body
    let newProductDoc= new productModel(newProduct)
    let createdProduct = await newProductDoc.save()
    res.status(201).json({ message: "Product Created", product: createdProduct })
})

//Retriving the Products
productApp.get('/products', async (req, res) => {
    let products = await productModel.find()
    //send res
    res.status(200).json({ message: "List of Products", products })
})

//how to retrieve a product using productID


productApp.get('/products/:productID', async (req, res) => {
    let prodid = req.params.productID
    let product = await productModel.findOne({productID: prodid})
    res.status(200).json({ message: "Product Found", payload: product })

    
})


//update Product

productApp.put("/products/:productID", async (req,res) => {
    
    let prodId = req.params.productID
    let modifiedProduct = req.body

    let latestProduct = await productModel.findOneAndUpdate({productID: prodId},
        { $set: { ...modifiedProduct} },
        { new: true}
    );

    res.status(200).json({message: "Product Modified",payload: latestProduct})
})

// //deleteUser

// userApp.delete("/users/:id",async (req,res) => {
    
//     let objId = req.params.id

//     let deletedUser = await usermodel.findByIdAndDelete(objId)

//     res.status(200).json({message:"User Removed",payload:deletedUser})
// })