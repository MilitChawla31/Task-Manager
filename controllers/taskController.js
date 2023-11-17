const { request, response } = require("express");
const taskModel = require("../model/taskModel");
const { v4 } = require("uuid");

const createTaskController = async (request, response) => {
  try {
    const uuid = v4();
    const dateOfCreation = Date.now().toString();
    const taskDeadline = Date.now().toString();
    const { taskTitle, taskDesc } = request.body;

    const task = await taskModel.create({
      taskId: uuid,
      taskTitle: taskTitle,
      taskDesc: taskDesc,
      dateOfCreation: dateOfCreation,
      taskDeadline: taskDeadline,
    });

    if (task && task._id) {
      response.status(201).json({ message: "Task Created Successfully" });
    } else {
      response.status(404).json({ message: "Task not Created" });
    }
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
  }
};

const getTaskController = async (request, response) => {
  try {
    const taskTitle = request.params.taskTitle;
    console.log("Title: ", taskTitle);
    const task = await taskModel.findOne({ taskTitle: taskTitle });

    if (task && task._id) {
      response.status(201).json({ message: "Task Found!" });
    } else {
      response.status(404).json({ message: "Task not found" });
      console.log(error);
    }
  } catch (error) {
    response.status(500).json({ message: "Internal server error" });
  }
};


const updateTaskController = async (request, response) => {
  try{
    const task = await taskModel.findByIdAndRemove({taskId},{taskTitle:taskTitle, taskDesc: taskDesc})
    console.log(book);


    if (task && task._id){
      response.status(201).json({message: "Task Updated Successfully"})
    } else {
      response.status(404).json({message: "Task not Updated"})
    }
  } catch (error) {
    response.status(500).json({message: "Internal Server Error"})
  }
};

const deleteTaskController = async (request, reponse) => {
  try{
    const taskTitle = request.params.taskTitle;
    console.log(taskTitle);
    const task = await taskModel.deleteOne({ taskTitle: taskTitle})
    console.log(task);

    if (task) {
      response.status(201).json({message: "Task Deleted Successfully"})
    } else {
      response.status(404).json({message: "Task not Deleted"})
    } 
  } catch (error) {
    response.status(500).json({message: "Internal Server Error"})
  }
}

module.exports = { createTaskController, getTaskController, updateTaskController, deleteTaskController };
