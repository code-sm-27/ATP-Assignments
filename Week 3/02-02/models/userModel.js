import { Schema, Types, model } from "mongoose"

const cartSchema = new Schema({
    cart:
    {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity:
    {
        type: Number,
        default: 1
    }
})
//create user schema (username,password,age)
const userSchema = new Schema({
    name:
    {
        type: String,
        required: [true, "Name is required"],
        minLength: [4, "min length should be 4"],
        maxLength: [6, "max length should be 6"]
    },
    email:
    {
        type: String,
        required: [true, "Email is required"],
        minLength: [4, "min length should be 4"],
        maxLength: [6, "max length should be 6"]

    },
    password:
    {
        type: String,
        required: [true, "password is required"],
        minLength: [6, ",in length of passsword is 6"],
        maxLength: [12, "max length of password is 12"]
    },
    cart:
    {
        type: cartSchema
    }
})

//create user model with that schema
export const usermodel = model("user", userSchema)