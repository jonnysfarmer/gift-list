const getCategories = require('../controllers/categories')


function getEtsyCategories() {
  return new Promise(function (resolve) {
    getCategories.then((res) => {
      // console.log(res[0])
      resolve(res)
    })
  })
}

module.exports = getEtsyCategories