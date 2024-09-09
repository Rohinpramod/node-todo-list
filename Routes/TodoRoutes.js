const express = require('express');
const router = express.Router();
const todoController = require('../ToDoController/todoController');
const validateTodoList = require('../middlewares/validateTodoList');



router.post('/',validateTodoList,todoController.addNewTodo);
router.get('/todo',todoController.getAllTodo);
router.get('/',(req,res)=>{res.send("welcome to ToDo App")})
router.get('/:id',todoController.getTodoById);
router.put('/:id',validateTodoList,todoController.UpdateTodo);
router.delete('/:id',todoController.deleteTodo);

module.exports = router;
