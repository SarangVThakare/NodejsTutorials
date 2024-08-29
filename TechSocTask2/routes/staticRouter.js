const express=require('express');
const router=express.Router();
const Student = require("../models/student");
const Staff=require("../models/staff");
const{handleStaffLogin,registerNewStudent,uploadMarks}=require("../controllers/admin");
const{handleStudentLogin}=require("../controllers/student");
router.get("/",(req,res)=>{
    return res.render("home");
});

router.get("/admin",(req,res)=>{
    return res.render("loginstaff")
});

router.post("/admin/login",handleStaffLogin);
router.post("/admin/register",registerNewStudent);
router.get("/student",(req,res)=>{
    return res.render("loginstudent");
});

router.post("/student/login",handleStudentLogin);

//router.get("/student",);

module.exports=router;
