var mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/nodeworkshop");

mongoose.Promise=global.Promise;

var studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    gender:String,
    createdDate:{
        type:Date,
        default:Date.now
    }
})

exports.Student=mongoose.model("Student",studentSchema,"students")

var booksSchema=mongoose.Schema({
    title: String,
    author: String
})

exports.Book=mongoose.model("Book",booksSchema,"books")