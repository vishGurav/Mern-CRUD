const express =require("express")
const cors=require("cors")


const mongoose =require("mongoose")

const user =require("./routes/userRoutee")

const app=express()
app.use(cors());


app.use(express.json())

// const product=require("./routes/ProductsRoute")



app.use("/",user)
app.get("/",(req,res)=>{
    res.send("hello node js backend..!")
});





module.exports =  app   