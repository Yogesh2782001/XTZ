const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    user_firstname: {
      type: String,
      required: true
    },
    user_lastname: {
      type: String,
      required: true
    },
    user_contact: {
      type: String,
      required: true
    },
    user_email: {
      type: String,
      required: true
    },
    user_password: {
      type: String,
      required: true
    }
  });
  

const User = mongoose.model('User', userSchema);

module.exports = User;