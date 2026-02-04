import { Schema, model } from "mongoose"

const userCommentSchema = new Schema({
    
})

const articleSchema = new Schema({
    author:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true]
    }
})