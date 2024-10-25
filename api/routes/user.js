const express= require("express");
const router = express.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.post("/signup",(req,res,next)=>{
  const useername=req.body.username;
  const email=req.body.email;
  User.findOne({ email: req.body.email })
  .exec()
  .then(user => {
    if (user) {
      return res.status(409).json({
        message: "Mail exists"
      });
    } else {
      const randomPicture = pfps[Math.floor(Math.random() * pfps.length)];

      if (randomPicture.length === 0) {
        throw new Error('No pictures found in the database');
      }
      const user = new User({
          _id: new mongoose.Types.ObjectId(),
          email:req.body.email,
          userName:req.body.username,
          password:req.body.password,
          profileImage:randomPicture,

        });
      user
      .save()
      .then(result => {const token = jwt.sign(
        {
          email: user.email,
          userId: user._id
        },
        process.env.JWT_KEY,
        {
            expiresIn: "30d"
        }
      );
      return res.status(200).json({
        message: "Auth successful",
        token: token
      });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
   }
}) })

router.post("/login", (req, res, next) => {
  username:req.body.username
  email:req.body.email
  User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (! user) {return res.status(401).json({
          message: "Auth failed"})
       }else{ const token = jwt.sign(
        {
          email: user.email,
          userId: user._id
        },
        process.env.JWT_KEY,
        {
            expiresIn: "30d"
        }
      );
      return res.status(200).json({
        message: "Auth successful",
        token: token
      });
    }
    res.status(401).json({
      message: "Auth failed"
    });})
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;