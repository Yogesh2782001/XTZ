const router = require("express").Router();
const authorize = require("../middleware/authorize");
const mongoose=require("mongoose");
const User = require('../models/User.model');


const uri="mongodb+srv://Ryuhit:Ryuhit%401729@cluster0.upfbsn2.mongodb.net/cls?retryWrites=true&w=majority";
mongoose.connect(uri);


router.post("/", authorize, async (req, res) => {
  try {
    const user = await User.findOne({_id:req.user});
    
  //if would be req.user if you change your payload to this:
    
  //   function jwtGenerator(user_id) {
  //   const payload = {
  //     user: user_id
  //   };
    
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;