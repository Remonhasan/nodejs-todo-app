const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

mongoose
.connect(process.env.MONGOBD_URL)
.then(() => console.log(`Connected to MONGODB!`))
.catch((err) => console.log(err))

app.listen( PORT, () => console.log(`Listening to the port ${PORT}`))