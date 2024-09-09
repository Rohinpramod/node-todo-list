const express = require('express');
const router = express.Router();
const todoController = require('../ToDoController/todoController');
const validateTodoList = require('../middlewares/validateTodoList');



router.post('/',validateTodoList,todoController.addNewTodo);
router.get('/todo',todoController.getAllTodo);
router.get('/',(req,res)=>{res.send("welcome to ToDo App")})
router.get('/todo/:id',todoController.getTodoById);
router.put('/todo/:id',validateTodoList,todoController.UpdateTodo);
router.delete('/todo/:id',todoController.deleteTodo);

module.exports = router;
