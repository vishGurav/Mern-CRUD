const app =require("./app")
const dotenv =require("dotenv")
//connecting databse
const mongoose =require("mongoose")
    
    mongoose.connect("mongodb://127.0.0.1:27017/mernCrud1")
    .then(()=>console.log(`mongodb connected with server`))

const server =app.listen(8080,()=>console.log(`server is running port 8080`))

