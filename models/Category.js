const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true },
  etsyCategoryName: { type: String, required: true },
  subcategory: [subcategorySchema]
})

module.exports = mongoose.model('Category', categorySchema)


const subcategorySchema = new mongoose.Schema({
  subcategoryName: { type: String, required: true },
  etsysubcategoryName: { type: String, required: true },
  subcategoryID: { type: mongoose.Schema.ObjectId, ref: 'List', required: true }
})

module.exports = mongoose.model('Subcategory', subcategorySchema)
