const express= require("express");
const app= express();
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRoute= require("./routes/auth");
const userRoute= require("./routes/users");
const postRoute= require("./routes/posts");
const catRoute= require("./routes/categories");
const multer = require("multer");
const path= require("path");
var cors=require("cors");
dotenv.config();
app.use(express.json());
app.use("/image", express.static(path.join(__dirname,"/image")));

mongoose.connect(process.env.MONGO_URL,{
  
}).then(console.log("connected to monngodb"))
.catch(err=>console.log(err));

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"image");
    },filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
});

const upload=multer({storage:storage});
app.post("/Api/upload",upload.single("file"),(req,res)=>{
     res.status(200).json("file has been uploaded");
});

app.use("/Api/auth",authRoute);
app.use("/Api/users",userRoute);
app.use("/Api/posts",postRoute);
app.use("/Api/categories",catRoute);

app.use(cors());

app.listen("5000",()=>{
    console.log("backend is running...");
});