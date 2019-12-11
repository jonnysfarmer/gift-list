
const axios = require('axios')
require('dotenv').config()
const etsyKey = process.env.ETSY_KEY

function getProducts(req, res) {
  // console.log('get1')
  // const cat = req.params.catname
  // axios.get(`http://openapi.etsy.com/v2/listings/active/?region=GB&category=${cat}&limit=6&api_key=${etsyKey}`)
  //   .then(response => {
  //     console.log('get2')
  //     // console.log(response.data)
  //     res.send({ data: response.data.results })
  //   })
  //   .catch(err => console.log(err))
}
//why does this one get called???




// Function to fetch Github info of a user.
const getEtsyImage = async (url) => {
  // console.log(`Fetching ${url}`)
  const etsyImage = await axios(url) // API call to get image info from Etsy
  return {
    id: etsyImage.data.id,
    image: etsyImage.data.image
  }
    .catch(error => console.log('Error in promisesimage', error))
}

// Iterates all items and returns their detail
const getEtsyItemDetail = async (items) => {
  // console.log(items)
  // console.log(Array.isArray(items))
  const requests = items.map((item) => {
    const url = `http://openapi.etsy.com/v2/listings/${item.listing_id}/images?region=GB&api_key=${etsyKey}`
    return getEtsyImage(url) // Async function that fetches the image info
      .then((a) => {
        return a // Returns the user info.
      })
  })
  return Promise.all(requests) // Waiting for all the requests to get resolved.
    .catch(error => console.log('Error in itemdetails', error)) //this is being caught
}

function getEtsyItems(req, res) {
  axios.get(`http://openapi.etsy.com/v2/listings/active/?region=GB&category=${req.params.cat}/${req.params.subcat}&limit=6&api_key=${etsyKey}`)
    .then(res => {
      getEtsyItemDetail(res.data.results)
        .then(console.log('uhm'))
    })
    .catch(error => console.log('Error in cat', error))
}



// function getImage(req, res) {
//   const id = req.params.id
//   axios.get(`http://openapi.etsy.com/v2/listings/${id}/images?region=GB&api_key=${etsyKey}`)
//     .then(response => {
//       res.send({ image: response.data.results[0].url_570xN, id: id })
//     })
//     .catch(err => console.log(err))
// }

function getTrending(req, res) {
  console.log('test')
  // hard coded for now
  const searchTerm = 'trending'
  axios.get(`https://openapi.etsy.com/v2/listings/${searchTerm}?api_key=${etsyKey}`)
    .then(response => {
      res.send({ data: response.data })
    })
    .catch(err => console.log(err))
}

module.exports = {
  getProducts,
  getEtsyItems,
  // getImage,
  getTrending
}