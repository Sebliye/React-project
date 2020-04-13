const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const User = new Schema(
     {
     firstname:String,
     lastname:String,
     email:String,
     password:String,
     role:String
     }
);
module.exports=mongoose.model('User',User);