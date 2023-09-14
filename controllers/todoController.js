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

// Update Todo
module.exports.updateTodo = async (req, res) => {

    const { _id, name } = req.body

    todoModel
        .findByIdAndUpdate(_id, { name })
        .then(() => res.send("Updated Successfully!"))
        .catch((err) => console.log(err))
}


//Delete Todo 
module.exports.deleteTodo = async (req, res) => {

    const { _id } = req.body

    todoModel
        .findByIdAndDelete(_id)
        .then(() => res.send("Deleted Successfully!"))
        .catch((err) => console.log(err))
}