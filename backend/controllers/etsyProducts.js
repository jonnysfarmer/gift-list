
const axios = require('axios')
require('dotenv').config()
const etsyKey = process.env.ETSY_KEY

function getProducts(req, res) {
  const cat = req.params.catname
  axios.get(`http://openapi.etsy.com/v2/listings/active/?region=GB&category=${cat}&limit=6&api_key=${etsyKey}`)
    .then(response => {
      // console.log(response.data)
      res.send({ data: response.data.results })
    }
    )
    .catch(err => console.log(err))
}

const etsyItems = [{}]

function getSubCat(req, res) {
  const cat = req.params.catname
  const subcat = req.params.subcatname

  axios.get(`http://openapi.etsy.com/v2/listings/active/?region=GB&category=${cat}/${subcat}&limit=6&api_key=${etsyKey}`)
    .then(response => {
      const resArray = response.data.results
      resArray.map((elem, i) => {
        etsyItems.push({
          id: i,
          productName: elem.title,
          price: elem.price,
          currencyCode: elem.currency_code,
          description: elem.description,
          src: 'etsy',
          listingId: 'etsy-' + elem.listing_id,
          imgsrc: '',
          subcategories: elem.category_path
        })
        getImage(i, elem.listing_id)
      })
    })
    .catch(err => console.log(err))
}

function getImage(id, listing_id) {
  axios.get(`http://openapi.etsy.com/v2/listings/${listing_id}/images?region=GB&api_key=${etsyKey}`)
    .then(response => {
      // console.log(id)
      etsyItems.map((elem) => {
        if (elem.id === id) {
          elem.imgsrc = response.data.results[0].url_570xN
        }
      })
      // console.log(etsyItems)
      return etsyItems
    })
    .catch(err => console.log(err))
}







module.exports = {
  getProducts,
  getSubCat,
  getImage
}