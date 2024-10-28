const express= require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User=require("../models/user");
const checkaurh = require("../midlleware/checkauth");
router.get("/",checkaurh,(req,res,next)=>{
    const now = new Date();
    const fiveHoursInMs = 5 * 60 * 60 * 1000;
   
    let response=null
    const userId=req.userData.userId;
    User.findOne({_id:userId}).exec().then(resp=>{
        response={
            username:resp.userName,
            pfp:resp.pfp,
            message:"what's up"+resp.userName+"any new tasks or done ones?"
        }
        res.status(200).json(response)

    }).catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
})
module.exports=router;