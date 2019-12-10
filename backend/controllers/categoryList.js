const Category = require('../models/Category')


function allCategories(req, res) {
  Category
    .find()
    .then(list => res.status(200).json(list))
    .catch(err => res.status(400).json(console.log(err)))
}



// categoryName: { type: String, required: true },
// etsyCategoryName: { type: String, required: true },
// subcategoryName: { type: [String], required: true },
// etsySubcategoryName: { type: [String], required: true }

module.exports = {
  allCategories
}