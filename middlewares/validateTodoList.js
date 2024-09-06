const validateTodoList = (req, res,next)=>{
    const {title,description,completed} =req.body;
    if(!title || !description) {
        return res.status(400).send('title, description, completed are needed')
    }
    next();
}
module.exports = validateTodoList;