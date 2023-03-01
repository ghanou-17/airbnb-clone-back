const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    firstName :{
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        minLenght : 2,
        maxlenght : 50
    },
    lastName :{
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        minLength : 2,
        maxlength : 50
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    password:{
        type : String,
        required : true,
       unique : true,
       min : 5,
       max : 50
    },
    // hash:String,
    //bcr
    
    isAdmin:{
        type : Boolean,
        default :false
    },
    // type: [
    //   {
    //     type: String,
    //     enum: ["CUSTOMER, OWNER"],
    //     default:"CUSTOMER"
    //   }
    // ],
    places: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Place"
      }
    ]
  })
  
module.exports = mongoose.model('User', userschema)