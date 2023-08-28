const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true},
    mobile:{type:Number,require:true},
    city:{type:String,require:true}
})  
const UserModel=mongoose.model('user',UserSchema)
module.exports={
    UserModel
}

// "name" : "nilesh khade",
// "email" : "n@gmail.com",
// "password" : "n12345",
// "mobile" : "8698214826",
// "city" : "shevgaon"
