const mongoose = require('mongoose')

// this subschema will pair up capitalised names with names formatted for API calls in an object and store them in array
const subcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category_name: { type: String, required: true },
  id: { type: mongoose.Schema.ObjectId, ref: 'Category' }
})

// this schema will be used to store the top-level categories coming out of etsy's API
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  short_name: { type: String, required: true },
  category_name: { type: String, required: true },
  subcategories: [subcategorySchema]
})

module.exports = mongoose.model('Category', categorySchema)