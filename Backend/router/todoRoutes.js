const express = require("express");
const { validateToken } = require("../helper/authMiddleware");
const ToDoControllers = require('./../controllers/toDoController.js');
const toDoRouter = express.Router();

toDoRouter.use(validateToken);

toDoRouter.post('/', ToDoControllers.createTodo);

toDoRouter.put('/complete', ToDoControllers.markTodoAsCompleted);

toDoRouter.delete('/', ToDoControllers.deleteTodo);

toDoRouter.put('/description', ToDoControllers.updateTaskDescription);

module.exports = toDoRouter;