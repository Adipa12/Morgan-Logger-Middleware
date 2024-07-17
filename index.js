const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const PORT = 3001;
const server = express();

server.use(morgan("combined"));

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
server.use(morgan('combined', { stream: accessLogStream }))



server.get("/",(req,res)=>{
    console.log("welcome to home page");
    res.status(200).send({"status code":200, "Message": "welcome to Home Page"});
    // res.send("this is home page");
});
server.get("/get-users",(req,res)=>{
    res.status(200).send({"status code":200,"message":"welcome to the user page!"})
});
server.post("/add-user",(req,res)=>{

    res.status(200).send({"status code":201,"message":"posting data successfuly!"})
});
server.put("/user/:id",(req,res)=>{
    let UserID = req.params.id
    console.log(UserID);
    res.status(200).send({"status code":201,"message":"updating the data successfuly!"})
});
server.delete("/user/:id",(req,res)=>{
    res.status(200).send({"message":"Deleting the data successfuly!"})
})
server.listen(PORT,(req,res)=>{
    console.log("port 3001 is listening");
})