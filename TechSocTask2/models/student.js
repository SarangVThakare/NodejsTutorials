const mongoose=require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rollno:{
        type:String,
        required:true,
        unique:true,
    },
    pass:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:'STUDENT',
    },
    s1:{type:Number,default:0,},
    s2:{type:Number,default:0,},
    s3:{type:Number,default:0,},
    s4:{type:Number,default:0,},
    s5:{type:Number,default:0,},
    s6:{type:Number,default:0,},
    s7:{type:Number,default:0,},
    s8:{type:Number,default:0,},
    s9:{type:Number,default:0,},

},{timestamps:true});

const Student = new mongoose.model('student',studentSchema);
module.exports=Student;