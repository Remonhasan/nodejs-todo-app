# Todo API with Node.js and Mongoose

This repository contains a Todo API built with Node.js and Mongoose, providing endpoints to manage a list of todos.

## Features

- **Create**: Add a new todo
- **Read**: Retrieve todos or specific todo by ID
- **Update**: Update a todo by ID
- **Delete**: Remove a todo by ID

## Prerequisites

Before running this project locally, ensure you have the following installed:

- Node.js
- MongoDB

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Remonhasan/nodejs-todo-app.git

## Install dependencies 

```bash
cd nodejs-todo-app
npm install
```

## Set up environment variables
Create a `.env` file in the root directory and add the following:

```
PORT=3000
MONGO_URI=your-mongodb-connection-string
```
## Start the server

```bash
npm start
```

## API Endpoints

```javascript
  router.get('/', getTodo)  // Get all todos
  router.post('/save', saveTodo) // Create a new todo
  router.post('/update', updateTodo) // Update a todo by ID
  router.post('/delete', deleteTodo)  // Delete a todo by ID
```

Made with love for Javascript !


