const express = require('express')
const {  userModel } = require('../Model/user.model')
const userrouter = express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



userrouter.post("/signup", async (req, res) => {

    const { Email,Password,Confirm_Password}=req.body

    try {
        let already_exist = await userModel.find({Email})
        if(already_exist.length){
            res.status(500).send({"msg":"User Already exist"})
        }else{
            bcrypt.hash(Password, 5, async function(err, hash) {
               let data = new userModel({Email,Password:hash,Confirm_Password:hash})
               await data.save()
                res.status(200).send({"msg":"User Successfully Registered"})
              
            });

        }
        

    } catch (error) {
        res.status(500).send({"msg":error.message})
    }



 
})


userrouter.post("/login", async (req, res) => {
const {Email,Password}=req.body
try {
    let findemail = await userModel.find({Email})
    let pass= findemail[0].Password
 
        bcrypt.compare(Password, pass, function(err, result) {
            if(result){
             res.status(200).send({"msg":"User Successfully loggedIn",token:jwt.sign({ userId:findemail[0]._id }, 'user')})
            }else{
                res.status(500).send({"msg":err.message})
            }
         });
     
    

} catch (error) {
    res.status(500).send({"msg":error.message})
}

   
})

module.exports = {
    userrouter
}