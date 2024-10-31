const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors=require("cors")
const cron=require("node-cron")



const userRoutes = require("./api/routes/user.js");
const dailyTask = require("./api/routes/mydailytask.js");
const tasks = require("./api/routes/mytask.js");
const getprofileroutes =require("./api/routes/myProfile.js");

const Task=require("./api/models/dailytask.js")

require('dotenv').config();

const uri=process.env.url;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };


async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
run().catch(console.dir);

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));


cron.schedule('0 0 * * *', () => {
  console.log('Running task every 24 hours');
  deletedailytasks();
});

// Your function to run
function deletedailytasks() {
  let now=new Date()
  let timePassed=null
  Task.find({}).exec().then(docs=>{
      docs.map(doc=>{
      timePassed=now-doc.taskDeleteTime
      if (timePassed>24 * 60 * 60 * 1000){
        Task.deleteOne({_id:doc._id}).then(res=>{
          return({msg:"daily tasks of yesterday have been deleted "})
        })
      }
      
    })
  })
}
// Routes which should handle requests
app.use("/user",userRoutes);
app.use("/tasks",dailyTask);
app.use("/myprofile",getprofileroutes);
app.use("/mytask",tasks)

app.use((req, res, next) => {
  const error = new Error("Resource not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
