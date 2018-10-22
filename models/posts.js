const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    post:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
});

module.exports=mongoose.model("post",postSchema)