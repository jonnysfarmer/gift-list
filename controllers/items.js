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

//client needs to pass us the userId, listId, the store, and the itemId - which should all be available already for them


//Check our item db to see if item is already in there
function add(req, res) {
  console.log(`${req.body.src}-${req.body.id}`)
  const listingId = `${req.body.src}-${req.body.id}`
  axios.get(`/items/${listingId}`)
    .then(() => {
      //getting a non error response means it's already in the database, so we don't need to add it again
      console.log('item already in database', listingId)
      //here is where we make a PUT to the listId for this user, passing it the listingId to save
      axios.put(`/lists/${req.body.user_id}/${req.body.list_id}`)
        .then(res => console.log(res.status, res.statusText, listingId)) //this works as console log, but I can't work out how to send it to client as res.status(201) says syntax error as res.status not a function
        .catch(err => console.log('itemExists err', err))
    })
    //axios is going to error here if the url is bad, aka the item doesn't exist in the database
    .catch(err => {
      getItemFromSrc(req.body)
    })

}


//If the item is not in our database, get the item details from Etsy
function getItemFromSrc(body) {
  console.log('getfromsrc', body.id)
  addItem(body)
  //this function should actually be whatever our generic get item from etsy function is, with a callback in it to say 'if post true, then call addItem')
}



//Once we have details from Etsy, post it to our item database
function addItem(body) {
  console.log('add item', body)
  Item
    .create(body)
    .then(console.log('created'))
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