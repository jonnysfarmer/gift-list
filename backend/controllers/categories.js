const axios = require('axios')
require('dotenv').config()

const etsyKey = process.env.ETSY_KEY

// this will be populated with data from etsy's API
const results = []

function getCategories() {
  const promise = new Promise(function (resolve, reject) {
    // etsy API call to grab all top-level categories
    axios.get(`https://openapi.etsy.com/v2/taxonomy/categories/?api_key=${etsyKey}`)
      .then((res) => {
        getSubCategories(res.data.results)
          .then(res => resolve(res))
          .catch(err => console.log(err))
      })
      .catch(err => reject(err))
  })
  return promise 
}

function getSubCategories(categories) {
  const promise = new Promise(function (resolve, reject) {
    categories.forEach((category, i) => {
      setTimeout(() => {
        console.log(i)
        // grab all subcategories per category on etsy
        axios.get(`https://openapi.etsy.com/v2/taxonomy/categories/${category.name}?api_key=${etsyKey}`)
          .then(res => {
            category.subCategories = []
            results.push(category) // TODO remove this, and the results when refactoring to use promise.all
            res.data.results.forEach((result) => {
              //TODO destructure this
              const temp = {
                name: result.name,
                short_name: result.short_name
              }
              category.subCategories.push(temp)
            })
            // TODO refactor to use promise.all instead of this rookie test!
            if (results.length === categories.length) {
              resolve(categories)
            }
          })
          .catch(err => reject(err))
      }, 2000 * i)
    })
  })
  return promise
}

module.exports = getCategories()