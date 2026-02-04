import { Schema, model } from "mongoose"

//create product Schema = (productID,productName,price)
const productSchema = new Schema({
    productID:
    {
        type: Number,
        required: [true, "Product ID is required"],
        minLength: [3, "Min Length of ID is 3"],
        maxLength: [6, "Max Length of ID is 6"]
    },
    productName:
    {
        type: String,
        required: [true, "Product Name is required"],
        minLength: [5, "Min length of Product Name is 5"],
        maxLength: [20, "Max length of Product Name is 20"]
    },
    price:
    {
        type: Number,
        required: [true, "Price is required"],
        min: [10, "Min Amount is 10/-"]
    }
})

//create product model with that schema
export const productModel = model("product", productSchema)