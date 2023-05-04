const bcrypt=require("bcryptjs");
const express=require("express");
const bodyParser=require("body-parser");
const jwtGenerator=require("../utils/jwtGenerator");
const mongoose=require("mongoose");
const validInfo=require("../middleware/validinfo");
const authorization=require("../middleware/authorize");
const { response } = require("express");
const router=express.Router();
const User = require('../models/User.model');


const uri="mongodb+srv://Ryuhit:Ryuhit%401729@cluster0.upfbsn2.mongodb.net/cls?retryWrites=true&w=majority";
mongoose.connect(uri);



router.use(express.json());
router.use(bodyParser.urlencoded({
    extended: true
  }));

const saltRounds=10;


router.post("/register",validInfo,async function(req,res){
    try{
        //1. destructure the req.body
        const {firstname,lastname,email,contact,password}=req.body;

        const user=await User.find({user_email:email});
        
        if(user.length!==0){
            return res.status(401).send("User already exists"); //unauthorized access
        }

        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                if(err){
                    throw err
                }else{
                    const validUser = new User({
                        user_firstname: firstname,
                        user_lastname: lastname,
                        user_contact: contact,
                        user_email: email,
                        user_password:hash
                      });
               
                    validUser.save()

                    const token=jwtGenerator(validUser._id);

                    res.json({token});
                   

                }
            });
        });




    } catch(err){
        console.log(err.message);
        res.status(500).send("Server error");
    }
});


//login route

router.post("/login",validInfo,async function(req,res){
    try{
        console.log("inside login");
        const {email,password}=req.body;
        console.log(email);
        console.log(password);

        const user=await User.findOne({user_email:email});
        
        if(user===null){
            return res.status(401).send("Password or Email is incorrect"); //unauthorized access
        }
        bcrypt.compare(password, user.user_password, function(err, reshash) {
            if(err){
                throw err
            }
            else{
                const token=jwtGenerator(user._id);
                console.log("inside login");
                console.log(reshash);
                res.json({reshash});
            }
        });



    }catch(err){
        console.log(err.message);
        res.status(500).send("Server error");
    }
});

router.get("/",authorization,async function(req,res){
    try{
        res.json(true);
    }catch(err){
        console.log(err.message);
        res.status(500).send("Server error");
    }
});

module.exports=router;