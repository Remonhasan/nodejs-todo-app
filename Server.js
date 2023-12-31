const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const routes = require('../Backend/routes/todoRoute')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGOBD_URL)
.then(() => console.log(`Connected to MONGODB!`))
.catch((err) => console.log(err))

app.use(routes)

app.listen( PORT, () => console.log(`Listening to the port ${PORT}`))