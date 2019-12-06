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



// export this to categories later and hide api key
// axios.get('https://openapi.etsy.com/v2/taxonomy/categories/?api_key=0b6tytx6ibc1jzi7gd790l0a')
//   .then(res => {
//     const categories = res.data.results.map(elem => elem.name)
//     console.log(categories)
//     categories.forEach((elem,i) => {
//       setTimeout(() => {
//         axios.get(`https://openapi.etsy.com/v2/taxonomy/categories/${elem}?api_key=0b6tytx6ibc1jzi7gd790l0a`)
//           .then(res => console.log(res.data.results.map(elem => elem.name)))
//           .catch(err => console.log(err))
//           // 1s seems to be still be exceeding the api call quota, so leave at 2s for now
//       }, 2000 * i)
//     })
//   })

app.listen(port, () => console.log(`Green light on port ${port}`))