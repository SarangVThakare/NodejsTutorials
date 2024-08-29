const Student=require('../models/student');
async function handleStudentLogin(req,res) {
    const {rollno,pass} = req.body;
    const student= await Student.findOne({rollno,pass});
    if(!student) {return res.render("loginstudent",{
        error: "Invalid Username or Password",
    });}
    
    return res.render("studentportal",{
        name:student.name,
        s1:student.s1,
        s2:student.s2,
        s3:student.s3,
        s4:student.s4,
        s5:student.s5,
        s6:student.s6,
        s7:student.s7,
        s8:student.s8,
        s9:student.s9,
        spi:(((student.s1+student.s2+student.s3+student.s4+student.s5+student.s6+student.s7+student.s8+student.s9)/36)*10),
    });
}

module.exports={handleStudentLogin};