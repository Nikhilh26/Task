const express = require("express");
const { validateToken } = require("../helper/authMiddleware");
const ToDoControllers = require('./../controllers/toDoController.js');
const toDoRouter = express.Router();

toDoRouter.use(validateToken);

toDoRouter.post('/q', ToDoControllers.createTodo);

toDoRouter.put('/', ToDoControllers.markTodoAsCompleted);

toDoRouter.delete('/', ToDoControllers.deleteTodo);

module.exports = toDoRouter;