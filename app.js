const express = require("express");
const bodyParser = require("body-parser");
const dateModule = require(__dirname+"/date.js");
var day = dateModule.getDate()
console.log(day + " --This is for testing purpose"); //Outputs the output of date.js module.
//using paranthesis to call the function inside the dateModule variable.

// console.log(dateModule);
 //Refer date.js 4th line for reference. This outputs "This is imorted form date.js file" as it is assigned to the module export. Whenever we assign someting to module.exports it is stored in this require module.

const app = express();
app.set("view engine", "ejs");
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test',{newUrlEncoded:true});



app.use(bodyParser.urlencoded({extended:true}))

let taskList = [];
var task = '';
app.get("/",(req,res)=>{
   
   
  
   res.render("list",{dayName:day,taskList:taskList}) //Datemodule is the variable which stores the output of the date.js module.

})


app.post("/",(req,res)=>{
    var task = req.body.taskInput;
    taskList.push(task);
    console.log(task);
    console.log(taskList);
    res.redirect('/');
})

app.listen('3000',()=>{
    console.log("Server is running...");
})