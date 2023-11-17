const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskId: {type:String, unique:true, required:true},
    taskTitle: {type:String, required:true},
    taskDesc: {type:String, required:true},
    dateOfCreation: {type:String},
    taskDeadline: {type:String},
})

const taskModel = mongoose.model("taskData",taskSchema);

module.exports = taskModel;