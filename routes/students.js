var express=require("express");
var router=express.Router();
var db=require("../db")


//Get all students
router.route("/")
    .get(async(req,res)=>{
        try {
            var students= await db.Student.find({})
            res.status(200).send(students)
        }
        catch(err){
            res.status(500).send(err)
        }
    })
    .post((req,res)=>{
        var newStudent=new db.Student(req.body)
        newStudent.save()
        .then((student)=>{
            res.status(200).send(student)
        })
        .catch((err)=>{
            res.status(500).send(err);
        })
    })

//Get single student
router.route("/:id")
    .get(function(req,res,next){
        var id=req.params.id;
        db.Student.findById(id,(err,student)=>{
            if(err) res.status(500).send(err);
            res.send(student);
        })
    })
    .delete(function(req,res){
        var id=req.params.id;
        db.Student.findByIdAndRemove(id,(err,student)=>{
            if(err) res.status(500).send(err);
            res.send(student);
        })
    })
    .put(function(req,res){
        var id=req.params.id;
        db.Student.findByIdAndUpdate(id,req.body,{new:true},(err,student)=>{
            if(err) res.status(500).send(err);
            res.send(student);
        })
    })

module.exports=router