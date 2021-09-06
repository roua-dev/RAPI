const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:String,
    email : String,
    phone : Number ,
})
module.exports=mongoose.model("User", userSchema)