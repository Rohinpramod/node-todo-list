const express = require('express');
const router = express.Router();
const todoController = require('../ToDoController/todoController');
const validateTodoList = require('../middlewares/validateTodoList');

router.post('/',validateTodoList,todoController.addNewTodo);
router.get('/',todoController.getAllTodo);
router.get('/:id',todoController.getTodoById);
router.put('/:id',validateTodoList,todoController.UpdateTodo);
router.delete('/:id',todoController.deleteTodo);

module.exports = router;
