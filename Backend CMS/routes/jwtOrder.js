const router = require('express').Router()
const PlaceOrder = require('../models/PlaceOrder.model')
const dotenv = require('dotenv')
const validOrderinfo=require("../middleware/validOrderinfo");
const mongoose=require("mongoose");
dotenv.config()

const uri="mongodb+srv://Ryuhit:Ryuhit%401729@cluster0.upfbsn2.mongodb.net/cls?retryWrites=true&w=majority";
mongoose.connect(uri);

router.post('/register',validOrderinfo, async(req,res) => {

  const newPlaceOrder = new PlaceOrder({
      pickup:req.body.pickup,
      drop: req.body.drop,
      weight: req.body.weight,
      typeofGood: req.body.typeofGood
})
  try{
    const savedPlaceOrder = await newPlaceOrder.save()
    res.status(201).json()
   }catch(err){
       res.status(400).json(err)
   }
})

module.exports = router