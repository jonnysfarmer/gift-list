const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { port, dbURI } = require('./config/environment')
const router = require('./router')
const cors = require('cors')
const axios = require('axios')
const categories = require('./controllers/categories')
const errorHandler = require('./lib/errorHandler')

// categories.then((res)=>{
//   const categories = res
//   console.log(categories)
//   // console.log('Categories :', res)
// })

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => console.log('Mongo is connected'))

const app = express()

app.use(bodyParser.json())

app.use((req, resp, next) => {
  console.log(`${req.method} to ${req.url}`)
  next()
})

app.use(cors())
//this basically allows us to access it from the front end locally even thoughts its on 
//a different port

app.use('/api', router)

app.use(errorHandler)


app.listen(port, () => console.log(`Green light on port ${port}`))

module.exports = app