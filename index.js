var express=require("express");
var app=express();

var books=require("./routes/books")
var students=require("./routes/students")
var auth=require("./routes/auth")

var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,Authorization');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });
  
app.all('/*', auth);

app.get("/",function(req,res){
    res.send("Welcome to Node")
})

app.use("/api/students",students)
app.use("/api/books",books)

app.listen(8000,()=>{
    console.log("server is started")
})