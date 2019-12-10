
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


//embedded relationship to link custom items
const customItemSchema = new mongoose.Schema({
  note: { type: String },
  url: { type: String },
  //link it to the List id
  list: { type: mongoose.Schema.ObjectId, ref: 'List' }
})

const listSchema = new mongoose.Schema({
  //userId connects us to the USER schema
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  listName: { type: String, required: true },
  //this must be 'me' or anyone else you enter
  giftRecipient: { type: String, required: true },
  //you can optionally attach this list to an event, all event fields are independently optional you can fill out one, all, none
  eventName: { type: String },
  eventDate: { type: Date },
  eventReminder: { type: String, enum: ['on', true, false] },
  //budget is also optional, but must be turned to the correct format for passing on APIs by the front end
  budget: { type: String }, //budget is always stored as GBP
  //list status is either active (visible) or archived (not visible) on dashboard/shared list view
  listStatus: { type: String, enum: ['Active', 'Archived'] },
  //CATEGORY (all are subcategories) - subcategoryId connects us to the category schema, we use subcategory here as that's what we'd query from the 
  subcategory: { type: Array, default: [] },
  //we're not implementing keywords in MVP but including in data structure for future
  keywords: { type: Array, default: [String] },
  //ITEMS saved will be an array of ID's fro our items schema as that is where the item deatils are saved
  itemsSaved: { type: Array, default: [] },
  //custom items, not required, but you can have many
  customItem: [customItemSchema],
  //shareable url is a url that will show a readonly view of the giftlist saved items
  shareUrl: { type: String }
},
{
  timestamps: true
})

listSchema.plugin(uniqueValidator)



module.exports = mongoose.model('List', listSchema)