
const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
  //userId connects us to the user schema
  userId: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  listName: { type: String, required: true },
  //this must be 'me' or anyone else you enter
  giftRecipient: { type: String, required: true },
  //you can optionally attach this list to an event, all event fields are independently optional you can fill out one, all, none
  eventName: { type: String },
  eventDate: { type: Date },
  eventReminder: { type: Boolean },
  //budget is also optional, but must be turned to the correct format for passing on APIs by the front end
  budget: { type: Number },
  //list status is either active (visible) or archived (not visible) on dashboard/shared list view
  listStatus: { type: String, enum: ['Active', 'Archived'] },
  //categories (all are subcategories) - subcategoryId connects us to the category schema, we use subcategory here as that's what we'd query from the 
  subcategoryId: { type: Array, default: [] },
  //we're not implementing keywords in MVP but including in data structure for future
  keywords: { type: Array, default: [] },
  //items saved will be an array of ID's fro our items schema as that is where the item deatils are saved
  itemsSaved: { type: Array, default: [] },
  //shareable url is a url that will show a readonly view of the giftlist saved items
  shareUrl: { type: String }
})


module.exports = mongoose.model('Lists', listSchema)