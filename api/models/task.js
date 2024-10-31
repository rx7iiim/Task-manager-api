const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    taskName:{type:String, required:true ,unique:true },
    taskTime:{type:Date}
});

module.exports = mongoose.model('task', userSchema);