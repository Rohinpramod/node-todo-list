const express = require('express');
const app = express();
const todoRoutes = require('./Routes/TodoRoutes');
app.use(express.json());

app.use('/todoList',todoRoutes)

const port = 5000

app.listen(port,()=>{
    console.log(`port is running at http://${port}`)
})
