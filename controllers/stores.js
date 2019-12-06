//The addItems isn't working so have moved function to items.js for now, will review later

// const { addItem } = require('./items')
// const axios = require('axios')





// //===== ETSY =====

// //needs to call etsy and return the item info we want
// //the id here being that stores product/listing id for the item we want
// function getEtsyListing(id, reqFrom) {

//   const APIKey = '0b6tytx6ibc1jzi7gd790l0a' //needs to be moved to environments, think Georg is on that
//   const etsyURL = 'https://openapi.etsy.com/v2/' //needs to be move to config


//   console.log(`${etsyURL}/listings/${id}/?region=GB&api_key=${APIKey}`)
//   const results = []


//   axios.get(`${etsyURL}/listings/${id}/?region=GB&api_key=${APIKey}`)
//     .then(res => {
//       console.log(res.data.results[0].title)
//       results.push({
//         productName: res.data.results[0].title,
//         price: res.data.results[0].price,
//         currencyCode: res.data.results[0].currency_code,
//         description: res.data.results[0].description,
//         src: 'etsy',
//         listingId: res.data.results[0].listing_id,
//         imgsrc: 'temp',
//         subcategories: res.data.results[0].category_path
//       })
//       // console.log(results)
//       if (reqFrom === 'fromCreateItem') { 
//         addItem(results) 
//       } else { 
//         console.log('notfromitems', results) 
//       }
//     })
//     .catch(err => console.log(err))

//   return results
// }

// module.exports = {
//   getEtsyListing
// }

