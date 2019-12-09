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
            const subcategoriesAPIName = res.data.results.map(elem => elem.name)
            category.subcategoriesAPIName = subcategoriesAPIName
            const subcategoriesShortName = res.data.results.map(elem => elem.short_name)
            category.subcategoriesShortName = subcategoriesShortName
            results.push(category)

            if (results.length === categories.length) {
              resolve(results)
            }
          })
          .catch(err => reject(err))
        // TODO: at 1000 it seems to still be exceeding the api call quota, so leave at 2000 for now
      }, 2000 * i)
    })
  })
  return promise
}

module.exports = {
  getCategories,
  getSubCategories
}