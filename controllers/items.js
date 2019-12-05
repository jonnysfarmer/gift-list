const Item = require('../models/Item')
const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8000/api'

/*These functions work as follows

1. user clicks 'save an item' & client sends post request
2. function add(req,res) is triggered
  2b. this uses axios ctoan make a GET call to our item database to see if the listingId exists already
3. if axiosGET receives a successful response, then it runs the success scenario - itemExists function
4. if axiosGET receives an error response, then it runs the getItemFromEtsy(id) function
  4b. then it runs the POST scenario - addItem function
*/


//Check our item db to see if item is already in there
function add(req, res) {
  axios.get(`/items/${req.body.src}-${req.body.id}`)
    .then(res => {
      itemExists(res.data.listingId)
    })
    //axios is going to error here if the url is bad, aka the item doesn't exist in the database
    .catch(err => {
      addItem(req.body)
    })

}

//If the item is in our database, send the listingId to the list
function itemExists(listingId) {
  console.log('item already in database', listingId)
  //here is where we make a POST to the listId for this user, passing it the listingId & hopefully chaining back the success result to the user!
}

//If the item is not in our database, get the item details from Etsy


//Once we have details from Etsy, post it to our item database
function addItem(body) {
  console.log('add item', body)
  Item
    .create(body)
    // need to send a valid response back
}

//somehow tell user this is done *thinking*






//===== GET ALL ITEMS =====
function index(req, res) {
  Item
    .find()
    .then(items => res.status(200).json(items))
    .catch(err => console.log(err))
}

//===== GET SPECIFIC ITEM =====
function show(req, res) {
  // console.log(listingId)
  //turn listing id into an obj so we can use find
  const listingId = req.params.listingId
  const json = '{"listingId" : "' + listingId + '"}'
  const itemListingId = JSON.parse(json)

  //get item by listingId
  Item
    .findOne(itemListingId)
    //return error if missing or success if success
    .then(item => {
      //check record exists and respond with error if it doesn't
      if (!item) res.status(404).json({ status: 404, message: 'Not found', error: 'Not found' })
      else (res.status(200).json(item))
    })
    .catch(err => console.log(err))
}





module.exports = {
  add,
  index,
  show
}