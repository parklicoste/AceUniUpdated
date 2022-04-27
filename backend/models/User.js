const mongoose = require ("mongoose");

//Defining the model for the user
const UserSchema = new mongoose.Schema({

    email: {
        type:String, 
        required:true,
        unique: true,
        validate: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    name:{
        type:String,
        default: 'Acer'
    },
    contribution:{
        type:Number,
        required:false,
    },
    mobile:{
        type:Number,
        required:false,
    },

});

module.exports = mongoose.model("User",UserSchema);