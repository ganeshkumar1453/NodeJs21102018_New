var express=require("express");
var router=express.Router();


//Get all books
router.route("/")
    .get(function(req,res){
        res.send(books)
    })
    .post(function(req,res){
        books.push(req.body)
        res.send(books)
    })

//Get single book
router.route("/:id")
    .get(function(req,res,next){

        var id=req.params.id;

        var newbook=books.filter((book)=>{
            return book.id==id;
        })

        res.send(newbook[0])
    })
    .delete(function(req,res){
        var id=req.params.id;
        var newbooks=books.filter((book)=>{
            return book.id != id
        })
        res.send(newbooks)
    })
    .put(function(req,res){
        var id=req.params.id;
        var newbook=books.filter((book)=>{
            return book.id == id
        })
        newbook[0].name="Something else"
        res.send(newbook[0])
    })

    module.exports=router