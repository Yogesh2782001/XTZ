const mongoose = require('mongoose')
const placeorder = mongoose.Schema
({
    pickup:{
        type: String,
        enum: ['Chennai','Bangalore','Hyderabad','Mumbai','Delhi','Kolkata'],
        required: true
    },
    drop: {
        type: String,
        enum: ['Chennai','Bangalore','Hyderabad','Mumbai','Delhi','Kolkata'],
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    typeofGood: {
        type: String,
        enum: ['Medical Cares','Food and Beverages','Hazardous','Apparel','Furniture'],
        required: true
    }
})
module.exports = mongoose.model('PlaceOrder',placeorder)