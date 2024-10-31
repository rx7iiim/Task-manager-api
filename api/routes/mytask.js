const express= require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Task=require("../models/task")
const checkauth = require("../midlleware/checkauth");


router.post("/",checkauth,(req,res,mext)=>{
    const task=new Task ({
    _id: new mongoose.Types.ObjectId(),
    taskName:req.body.task,
    taskTime: new Date(),
    })
    task.save()
    
    user.findOne({_id:userId}).then(user=>{
        user. userDailyTasks.push(task._id)
        return user.save()
    })
    user.findOne({_id:userId}).populate("userTasks")
    .then(result=>{
        res.status(200).json({
            message:"your task has been added seccefully !!"
        })
    })
    .catch(err=>{
        res.status(505).json({
            message:err
        })})})
    
    router.get("/",checkauth,(req,res,next)=>{
        let response=null
        const userId=req.userData.userId;
        User.findOne({_id:userId}).select("userTasks").exec().then(resp=>{
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
        Task.deleteOne({_id:userId}).exec().then(res=>{
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
    router.patch("/taskId",checkauth,(req,res,next)=>{
        const id = req.params.taskId;
        Task
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