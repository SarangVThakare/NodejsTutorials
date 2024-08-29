const Staff=require("../models/staff");
const Student=require('../models/student');
async function handleStaffLogin(req,res){
    const {email,password} = req.body;
    const staff= await Staff.findOne({email,password});
    if(!staff) {return res.render("loginstaff",{
        error: "Invalid Username or Password",
    });}
    return res.render("adminportal");
}

async function registerNewStudent(req,res){
    const {name,rollno,pass,s1,s2,s3,s4,s5,s6,s7,s8,s9}=req.body;
    const student= await Student.create({
        name,
        rollno,
        pass,
        s1,s2,s3,s4,s5,s6,s7,s8,s9,
    });
    return res.render("adminportal");
}


module.exports={handleStaffLogin,registerNewStudent};