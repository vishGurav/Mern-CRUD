
const mongoose=require("mongoose")

 const userschema = new mongoose.Schema({
    fname:{
        type:String,
        required:[true,"Please Enter  user first Name "],
        
    },
    lname:{
        type:String,
        required:[true,"Please Enter  user last name "]
    },
    email:{
        type:String,
        required:[true,"Please Enter  Your Name "],
        unique:true,
        },
    password:
    {
        type:String,
        required:[true,"Please Enter  Your password "],
        minLength:[8,"Password should be greater  than 8 characters"],
       

    },
    
        
    
})


module.exports =mongoose.model("User",userschema)