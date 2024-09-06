const todos = [];
let currentId = 1;

exports.addNewTodo = (req, res)=>{
    const {title,description} = req.body;
    const newTodo = {
        id:todos.length +1,
        title,
        description,
        completed:false,
    };
    todos.push(newTodo);
    res.status(201).json(newTodo)
};

exports.getAllTodo = (req,res)=>{
   res.json(todos);
};

exports.getTodoById =(req, res)=>{
    const todo = todos.find(t=> t.id === parseInt(req.params.id));
    if(!todo)
        return res.status(404).send("Todo List not Found");
    res.json(todo);
};

exports.UpdateTodo =(req, res)=>{
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo)
        return res.status(404).send("Todo List not Found");
    
    const{title,description,completed}= req.body;
    if(title) todo.title = title;
    if(description) todo.description = description;
    if(completed) todo.completed !==undefined ? completed : todo.completed;
    res.json(todo);
};

exports.deleteTodo = (req,res)=>{
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if(todoIndex === -1)
        return res.status(404).send('Todo  not Found');
    todos.splice(todoIndex,1);
    res.status(204).send();
};