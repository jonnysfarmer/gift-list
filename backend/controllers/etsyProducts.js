
const axios = require('axios')
require('dotenv').config()
const etsyKey = process.env.ETSY_KEY

// function getProducts(req, res) {
//   console.log('gettingproducts')
//   // const cat = req.params.catname
//   // axios.get(`http://openapi.etsy.com/v2/listings/active/?region=GB&category=${cat}&limit=6&api_key=${etsyKey}`)
//   //   .then(response => {
//   //     // console.log(response.data)
//   //     res.send({ data: response.data.results })
//   //   }
//   //   )
//   //   .catch(err => console.log(err))
// }




function getSubCat(req, res) {
console.log('gettingsubcat')
  const cat = req.params.catname
  const subcat = req.params.subcatname
  const etsyItems = [{}]

  axios.get(`http://openapi.etsy.com/v2/listings/active/?region=GB&category=${cat}/${subcat}&limit=6&api_key=${etsyKey}`)
    .then(res => {
      const resArray = res.data.results
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
        axios.get(`http://openapi.etsy.com/v2/listings/${elem.listing_id}/images?region=GB&api_key=${etsyKey}`)
          .then(res => {
            // console.log(id)
            etsyItems.map((elem) => {
              if (elem.id === i) {
                elem.imgsrc = res.data.results[0].url_570xN
              }
            })
            console.log(etsyItems)
            // res.send({ data: etsyItems }) 
            // return etsyItems
          })
          .catch(err => console.log(err))
      })
    })
    .catch(err => console.log(err))
}



module.exports = {
  // getProducts,
  getSubCat
}