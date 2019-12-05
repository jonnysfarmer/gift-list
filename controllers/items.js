const Item = require('../models/Item')
const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8000/api'



function add(req, res) {

  //call the show function via the router so we can pass the listingId on the url (there must be a better way than this!)
  axios.get(`/items/${req.body.store}-${req.body.id}`)
    .then(console.log('calling it fine'))
    //if no error, then send res to say successfully saved (need to change this to call the post listingId to list
    .then(res => console.log('exists in db'))
    //if is error then we'll run our post
    //axios is going to error here if the url is bad, aka the item doesn't exist in the database
    .catch(err => console.log('I found bad'))
}






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
      else res.status(200).json(item)
    })
    .catch(err => console.log(err))
}





module.exports = {
  add,
  index,
  show
}