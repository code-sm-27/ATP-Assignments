import { Schema, model } from "mongoose"

//create product Schema = (productID,productName,price)
const productSchema = new Schema({
    productName:
    {
        type: String,
        required: [true, "Product Name is required"],
        minLength: [2, "Min length of Product Name is 5"],
        maxLength: [20, "Max length of Product Name is 20"]
    },
    price:
    {
        type: Number,
        required: [true, "Price is required"],
        min: [10, "Min Amount is 10/-"]
    },
    brand:
    {
        type: String,
        required: [true, "Brand Name is required"],
        minLength: [5, "Min length of Brand Name is 5"],
        maxLength: [20, "Max length of Brand Name is 20"]

    },
})

//create product model with that schema
export const productModel = model("product", productSchema)