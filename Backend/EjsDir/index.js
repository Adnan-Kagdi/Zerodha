const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname,"public/css")))
app.use(express.static(path.join(__dirname,"public/js")))
app.set("views", path.join(__dirname,"/views"))
app.set("view engine", "ejs")

app.get("/",(req,res) => {
    res.render("home");
})

app.get("/rollDice", (req,res) => {
    let diceNum = Math.floor(Math.random() * 6) + 1 
    res.render("rollDice",{diceNum})
})

app.get("/ig/:username", (req,res) => {
    let {username} = req.params;
    let instaData = require("./data.json");
    let data = instaData[username]
     console.log(data)

    if(data){
        res.render("instagram",{username, data})
    } else{
        res.render("wrongReq")
    }
    
})

app.listen(port, () => {
    console.log(`listening on port ${8080}`)
})