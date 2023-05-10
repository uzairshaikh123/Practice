const express=require('express')
const userrouter = express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { userModel } = require('../Model/user.model');

userrouter.post("/register",async (req,res)=>{

    const { Email,Password,Confirm_Password}=req.body

    try {

        let data = await userModel.find({Email})
        if(data.length){
            res.status(400).send({"msg":"User already exist, please login"})
        }else{
            bcrypt.hash(Password, 5, async function(err, hash) {
                let newdata = new userModel({Email,Password:hash,Confirm_Password:hash})
                await newdata.save()
                res.status(200).send({"msg":"User Successfully Registered"})
            });
            
            
        }
    } catch (error) {
        res.status(200).send({"msg":error.message})
        
    }






})
userrouter.post("/login",async (req,res)=>{

    const {Email,Password}=req.body

    try {
        let data = await userModel.find({Email})
       
        const pass=data[0].Password
         
    if(data.length){
        bcrypt.compare(Password, pass, function(err, result) {
          if(result){
            res.status(200).send({"msg":"User Loggedin Successfully",token:jwt.sign({ user_ID: data[0]._id }, 'user')})
        }else{
            
            res.status(400).send({"msg":err})
          }
        });
    }else{

    }
    } catch (error) {
        console.log({"msg":error.message})
    }

// res.send()

})

module.exports={
    userrouter
}