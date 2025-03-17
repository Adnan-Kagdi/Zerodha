const express = require("express");
const app = express();

let port = 8080;

 app.listen(port,()=>{
    console.log("app is listening on port")
 })  

app.get("/search", (req,res) => {
  let {q} = req.query;
  console.log(q);
  res.send(`you're search for ${q}`);   
})

app.get("/:username",(req,res) => {
   let {username} = req.params;
    res.send(`Welcome to the page!${username}`)
    
 })
app.get("*",(req,res) => {
  res.send("Wrong request")
})

//  app.use((req,res)=>{
//    console.log(req);
//     console.log("request recieved")
//     res.send("<input placeholder=Enter your name> ;<button>Press<button/>")
//  })

