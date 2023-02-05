const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const connectDB = require('./database/mongodb')
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))
app.use(express.json({ limit: "2mb" }));


app.use('/api', require('./routers/user.router'))





app.listen(process.env.PORT || 3000, console.log(`Server is run on http://localhost:${process.env.PORT}`))