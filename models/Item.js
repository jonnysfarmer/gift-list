const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')



const itemSchema = new mongoose.Schema({

  productName: { type: String, required: true },
  price: { type: String, required: true },
  currenctCode: { type: String, required: true },
  description: { type: String, required: true },
  src: { type: String, required: true },
  listingId: { type: String, required: true, unique: true },
  imgsrc: { type: String, required: true }

},
{
  timestamps: true
})

// these are pulled from etsy API when it is added to the list.  
// Listing ID is always true!


itemSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Item', itemSchema)