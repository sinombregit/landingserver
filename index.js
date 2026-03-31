const express=require('express')

const mysql = require('mysql2')
const cors = require('cors')
const app =express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use('/api/contact', require('./routes/contactRoute') )


