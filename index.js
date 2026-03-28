const express=require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app =express()
require('dotenv').config()

app.use(cors({
  origin: 'https://adminpro-7e194.firebaseapp.com',
  optionsSuccessStatus: 200 
}))
app.use(express.json())

app.use('/api/contact', require('./routes/contactRoute') )


app.listen(3000, () => {

    console.log('iniciado')
})