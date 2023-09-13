const todoModel = require('../models/todoModel')

// Get Todo List
module.exports.getTodo = async (req, res) => {
    const toDo = await todoModel.find()
    res.send(toDo)
}

// Save Todo 
module.exports.saveTodo = async (req, res) => {
    
    const { name } = req.body 

    todoModel
    .create({ name })
    .then((data) => {
        console.log("Added successfully!")
        console.log(data)
        res.send(data)
    })
}