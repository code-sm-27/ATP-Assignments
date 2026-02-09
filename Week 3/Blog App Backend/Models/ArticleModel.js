import { Schema,model } from "mongoose";

//create user comment Schema
const userCommentSchema=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    comment:{
        type:String
    }
})
//create article schema
const articleSchema=new Schema({
    author:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:[true,"author id required"]
    },
    title:{
        type:String,
        required:[true,"tittle id required"]
    },
    category:{
        type:String,
        required:[true,"category id required"]
    },
    content:{
        type:String,
        required:[true,"content id required"]
    },
    comments:[userCommentSchema],
    isArticleActive:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true,
    strict:"throw",
    versionKey:false
});

export const ArticleModel=model("article",articleSchema);