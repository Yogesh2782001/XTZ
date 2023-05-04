const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const uri="mongodb+srv://Ryuhit:Ryuhit%401729@cluster0.upfbsn2.mongodb.net/cls?retryWrites=true&w=majority";

mongoose.connect(uri);


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
//middleware
app.use(express.json());//req.body
app.use(cors());


//Routes

app.use("/auth",require("./routes/jwtAuth"));
app.use('/placeorder',require('./routes/jwtOrder'));
app.use("/dashboard",require("./routes/dashboard"));
app.use("/customers",require("./routes/uploadDoc"));

app.get("/client/src/components/Login.js",function(req,res){
  res.render("home");
})

app.listen(3000,function(req,res){
    console.log("Server is running at port 3000");
});