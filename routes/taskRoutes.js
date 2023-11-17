const {Router, request, response} = require('express');
const { createTaskController, getTaskController, deleteTaskController, updateTaskController} = require('../controllers/taskController');

const taskRoutes = Router();

taskRoutes.post('/createTask',(request,response)=>{createTaskController(request,response)});
taskRoutes.get('/getTask/:taskTitle',(request,response)=>{getTaskController(request,response)});
taskRoutes.delete('/deleteTask/:taskTitle',(request, response)=>{deleteTaskController(request,response)});
taskRoutes.put('/updateTask',(request,response)=>{updateTaskController(request,response)});
module.exports = taskRoutes;