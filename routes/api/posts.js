const {Router}=require("express");
const router=Router();
const Post=require("../../models/posts");

async function getPosts(){
    // get the post from the database
    posts= await Post.find({});
    // return the posts
    return posts;
}

// get posts
router.get("/",async (req,res)=>{
    try{
        let posts=await getPosts();
        res.json(posts);
    }
    catch(err){
        res.status(404);
        console.log(err);
        res.end("there was an error getting the posts!!please try again.");
    }

})


// add posts
router.post("/",async (req,res)=>{
    try{
        let newPost=new Post();
        newPost.post=req.body.post;
        let savedPost=await newPost.save();
        res.json(savedPost);
    }
    catch(err){
        console.log(err);
        res.status(404);
        res.end("there was an error saving the post");
    }
})

// remove post
router.delete("/:id",async(req,res)=>{
    try{
        post=await Post.findByIdAndDelete(req.params.id);
        res.json(post);
    }
    catch(err){
        console.log(err);
        res.status(404);
        res.end("there was an error saving!! please try again later.");
    }

})

module.exports=router;