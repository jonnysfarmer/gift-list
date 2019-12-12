const getCategories = require('../controllers/categories')


function getEtsyCategories() {
  const promise = new Promise(function (resolve) {
    getCategories.then((res) => {
      resolve(res)
    })
  })
  return promise
}

module.exports = getEtsyCategories