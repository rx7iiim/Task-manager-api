const express= require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Task=require("../models/dailytask")
const checkauth = require("../midlleware/checkauth");
const user = require("../models/user");


router.post("/",checkauth,(req,res,next)=>{
    const userId=req.userData.userId;
    let task = new Task ({
    _id: new mongoose.Types.ObjectId(),
    taskName:req.body.task,
    taskDeleteTime: new Date(),

    })
    task
    .save()
    user.findOne({_id:userId}).then(user=>{
        user. userDailyTasks.push(task._id)
        return user.save()
    })
    user.findOne({_id:userId}).populate("userDailyTasks")
    .then(result=>{
        res.status(200).json({
            message:"your task has been added seccefully !!"
        })
    })
    .catch(err=>{
        res.status(505).json({
            message:err
        })}
    )})
    
    router.get("/", checkauth, (req, res, next) => {
        const userId=req.userData.userId;
    
        User.findOne({ _id: userId })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ msg: "User not found" });
                }
    
                const ids = user.userDailyTasks;
                return Task.find({ _id: { $in: ids } });
            })
            .then(tasks => {
                res.status(200).json({
                    tasks: tasks.map(task => ({
                        taskName: task.taskName
                    }))
                });
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ msg: "An error occurred" });
            });
    });
    
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
    router.patch("/:taskId",checkauth,(req,res,next)=>{
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