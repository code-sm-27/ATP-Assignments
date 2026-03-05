// Create User Schema with validations
// Create User Model for User Schema
import { Schema, model} from "mongoose"

const UserSchema = new Schema({

    name:
    {
        type: String,
        required: [true, "Name is Required"]
    },
    email:
    {
        type: String,
        required: [true, "Email is Required"],
        unique:[true, "Email already exists"]
    },
    dateOfBirth:
    {
        type: Date,
        required: [true, "Date Of Birth is Required"],
    },
    mobile:
    {
        type: Number
    },
    status:{
        type: Boolean,
        default: true,
    }
},
{
    timestamps:true,
    strict:"throw",
    versionKey:false
})

export const UserModel = model("user",UserSchema)