// dependencies
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require('cors');
const port=process.env.PORT||1999
const posts=require("./routes/api/posts")

// initializations
mongoose.connect("mongodb://posts1234:o4kasibe@ds139243.mlab.com:39243/posts",{useNewUrlParser:true})
const app=express();

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use((req,res,next)=>{
    console.log(`making a ${req.method} request for ${req.path}`,req.body)
    next();
});


// routes
app.use("/api/posts",posts);

// if (process.env.NODE_ENV=="production"){
    app.use(express.static(__dirname+"/public"));

    app.get(/.*/,(req,res)=>{
        res.sendFile(__dirname+"/public/index.html")
    });
// }


// server start
app.listen(port,()=>console.log(`server up and running on port:${port}`));