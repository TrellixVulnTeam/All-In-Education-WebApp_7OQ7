const express=require("express")
const mongoose=require('mongoose')
const bodyParser=require("body-parser")

const app=express()

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost/StudentData",{useNewUrlParser:true},{useUnifiedTopology:true})

const studentSchema={
    name:String,
    dob:String,
    gender:String,
    email:String,
    father_name:String,
    mother_name:String,
    phone_no:Number,
    address:String,
    pin:Number,
    board_10:String,
    school_name_10:String,
    cgpa_10:Number,
    board_12:String,
    school_name_12:String,
    cgpa_12:Number,
    course_name_ug:String,
    clg_name_ug:String,
    cgpa_ug:Number,
    course_name_pg:String,
    clg_name_pg:String,
    cgpa_pg:Number,
    clg_name:String,
    field_name:String,
    course_name:String,
    year:String


}

const Student=mongoose.model("Student",studentSchema)

app.use(express.static('extras'))





app.get('/main-page.html',(req,res)=>{
    res.sendFile(__dirname+"/main-page.html")
})

app.get('/pick-course.html',(req,res)=>{
    res.sendFile(__dirname+"/pick-course.html")
})

app.get('/application_main.html',(req,res)=>{
    res.sendFile(__dirname+"/application_main.html")
})

app.get('/colleges/cdlsiet.html',(req,res)=>{
    res.sendFile(__dirname+"/colleges/cdlsiet.html")
})

app.get('/colleges/gbpant.html',(req,res)=>{
    res.sendFile(__dirname+"/colleges/gbpant.html")
})

app.get('/colleges/iitm.html',(req,res)=>{
    res.sendFile(__dirname+"/colleges/iitm.html")
})

app.get('/colleges/picasso.html',(req,res)=>{
    res.sendFile(__dirname+"/colleges/picasso.html")
})

app.get('/application.html',(req,res)=>{
    res.sendFile(__dirname+'/application.html')
})

app.get('/compare.html',(req,res)=>{
    res.sendFile(__dirname+'/compare.html')
})

app.get('/compare/engineering.html',(req,res)=>{
    res.sendFile(__dirname+'/compare/engineering.html')
})

app.post('/application.html',(req,res)=>{
    let student= new Student({
    name:req.body.name,
    dob:req.body.dob,
    gender:req.body.gender,
    email:req.body.email,
    father_name:req.body.father_name,
    mother_name:req.body.mother_name,
    phone_no:req.body.phone_no,
    address:req.body.address,
    pin:req.body.pin,
    board_10:req.body.board_10,
    school_name_10:req.body.school_name_10,
    cgpa_10:req.body.cgpa_10,
    board_12:req.body.board_12,
    school_name_12:req.body.school_name_12,
    cgpa_12:req.body.cgpa_12,
    course_name_ug:req.body.course_name_ug,
    clg_name_ug:req.body.clg_name_ug,
    cgpa_ug:req.body.cgpa_ug,
    course_name_pg:req.body.course_name_pg,
    clg_name_pg:req.body.clg_name_pg,
    cgpa_pg:req.body.cgpa_pg,
    clg_name:req.body.clg_name,
    field_name:req.body.field_name,
    course_name:req.body.course_name,
    year:req.body.year,
    })
    student.save()
    res.redirect('/application.html')
})

app.listen(8080,()=>{
    console.log("Server on 8080")
})