const mongoose=require('mongoose');

const staffSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true});

const Staff = mongoose.model('staff',staffSchema);
module.exports=Staff;
