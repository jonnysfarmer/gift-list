
const axios = require('axios')
require('dotenv').config()
const etsyKey = process.env.ETSY_KEY

function getProducts(req, res) {
  const cat = req.params.catname
  axios.get(`https://openapi.etsy.com/v2/listings/active/?region=GB&category=${cat}&limit=6&api_key=${etsyKey}`)
    .then(response => {
      // console.log(response.data)
      res.send({ data: response.data.results })
    }
    )
    .catch(err => console.log(err))
}

function getSubCat(req, res) {
  const cat = req.params.catname
  const subcat = req.params.subcatname
  axios.get(`https://openapi.etsy.com/v2/listings/active/?region=GB&category=${cat}/${subcat}&limit=6&api_key=${etsyKey}`)
    .then(response => {
      // console.log(response.data)
      res.send({ data: response.data.results })
    }
    )
    .catch(err => console.log(err))

}

function getImage(req, res) {
  const id = req.params.id
  axios.get(`https://openapi.etsy.com/v2/listings/${id}/images?region=GB&api_key=${etsyKey}`)
    .then(response => {
      res.send({ image: response.data.results[0].url_170x135 }) 
    })
    .catch(err => console.log(err))
}

function getTrending(req, res) {
  console.log('test')
  // hard coded for now
  const searchTerm = 'interesting'
  axios.get(`https://openapi.etsy.com/v2/listings/${searchTerm}?api_key=${etsyKey}`)
    .then(response => {
      res.send({ data: response.data.results })
    })
    .catch(err => console.log(err))
}

module.exports = {
  getProducts,
  getSubCat,
  getImage,
  getTrending
}