const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
const mongoose=require('mongoose')
const { userrouter } = require('./Routes/user.routes')
app.use(cors())
require('dotenv').config()


app.use("/user",userrouter)

app.listen(process.env.port,async ()=>{

    try {
        
        mongoose.connect(
            process.env.url
          )
          .then(()=>console.log('connected'))
          .catch(e=>console.log(e));
        console.log("app is started")
        
    } catch (error) {
        console.log(error)
    }



})

