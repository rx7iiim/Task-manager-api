const mongoose = require('mongoose');

const dailyTaskSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    taskName: { type: String, required: true, unique: true },
    taskDeleteTime: { type: Date }
    
});

module.exports = mongoose.model('dailyTask', dailyTaskSchema);
