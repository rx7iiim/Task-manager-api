const express= require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Task=require("../models/task")
const checkauth = require("../midlleware/checkauth");
const task = require("../models/task");

router.post("/",checkauth,(req,res,mext)=>{
    const Task=new task ({
    task:req.body.task,
    taskTime: new Date(),
    })
    Task.save().then(result=>{
        res.status(200).json({
            message:"your task has been added seccefully !!"
        })
    }).catch(err=>{
        res.status(505).json({
            message:err
        })})})
    
    router.get("/",checkauth,(req,res,next)=>{
        let response=null
        const userId=req.userData.userId;
        User.findOne({_id:userId}).exec().then(resp=>{
            response={
                tasks:resp.map(ts=>{
                    Task.findOne({_id:ts}).exec().then(res=>{
                        return{task:res.taskName}
                    })
                })
            }
            res.status(200).json(response)
        }
        )
    })
    router.delete("/:taskId",checkauth,(req,res,next)=>{
        task.deleteOne({_id:userId}).exec().then(res=>{
            res.status(200).json({
                message:"the task has been deleted seccefully"
            })
        }).catch(err=>{
            res.status(500).json({
                eror:err,
            })
        }
        )

    })
    router.patrch("/taskId",checkauth,(req,res,next)=>{
        const id = req.params.taskId;
        task
        .updateOne({_id:id},{$set:{taskName:req.body.taskname}})
        .exec()
        .then(res=>{
            res.status(200).json({res:"your task has been updated succefully !!"})
        })
        .catch(err=>{res.status(500).json({
            err:err
        })})
    })
    
        module.exports=router;