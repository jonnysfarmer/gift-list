const mongoose = require('mongoose')

// this schema will be used to store the subcategories coming out of etsy's API
const subcategorySchema = new mongoose.Schema({
  subcategoryName: { type: String, required: true },
  etsysubcategoryName: { type: String, required: true },
  subcategoryID: { type: mongoose.Schema.ObjectId, ref: 'Category' }
})

// this schema will be used to store the top-level categories coming out of etsy's API
const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  etsyCategoryName: { type: String, required: true },
  subcategory: [subcategorySchema]
})



module.exports = mongoose.model('Category', categorySchema)
