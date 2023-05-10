const express = require('express')
const userrouter = express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { Usermodel } = require('../Model/user.model');

userrouter.get("/",(req,res)=>{
res.end("hello")
})

// userrouter.post("/signup", async (req, res) => {

//     const { Email,Password,Confirm_Password}=req.body

//     try {
//         let already_exist = await Usermodel.find({Email})
//         if(already_exist.length){
//             res.status(500).send({"msg":"User Already exist"})
//         }else{
//             bcrypt.hash(Password, 5, async function(err, hash) {
//                let data = new Usermodel({Email,Password:hash,Confirm_Password:hash})
//                await data.save()
//                 res.status(200).send({"msg":"User Successfully Registered"})
              
//             });

//         }
        

//     } catch (error) {
//         res.status(500).send({"msg":error.message})
//     }



 
// })


// userrouter.post("/login", async (req, res) => {
// const {Email,Password}=req.body
// try {
//     let findemail = await Usermodel.find({Email})
//     let pass= findemail[0].Password
 
//         bcrypt.compare(Password, pass, function(err, result) {
//             if(result){
//              res.status(200).send({"msg":"User Successfully loggedIn",token:jwt.sign({ userId:findemail[0]._id }, 'user')})
//             }else{
//                 res.status(500).send({"msg":err.message})
//             }
//          });
     
    

// } catch (error) {
//     res.status(500).send({"msg":error.message})
// }

   
// })

module.exports = {
    userrouter
}