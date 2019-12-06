const categories = require('../controllers/categories')


function getEtsyCategories() {
  const promise = new Promise(function (resolve) {
    const etsyCategoriesToSeed = []
    categories.then((res) => {
      const categories = res
      categories.forEach(elem => {
        etsyCategoriesToSeed.push({
          categoryName: elem.long_name,
          etsyCategoryName: elem.name,
          subcategoryName: elem.subcategoriesShortName,
          etsySubcategoryName: elem.subcategoriesAPIName
        })
      })
      resolve(etsyCategoriesToSeed)
    })
  })
  return promise

}

module.exports = getEtsyCategories