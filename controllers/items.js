const Item = require('../models/Item')
const axios = require('axios')


//Functions required just by this backend controller






function add(req, res) {

  //receive API request and get the variables we need
  console.log(req.body)
  const listingId = `${req.body.store}-${req.body.id}`.toLowerCase()
  console.log(listingId)

}








//get all items from our db
function index(req, res) {
  Item
    .find()
    .then(items => res.status(200).json(items))
    .catch(err => console.log(err))
}

//get specific item from our db
function show(req, res) {
  //turn listing id into an obj so we can use find
  const json = '{"listingId" : "' + req.params.listingId + '"}' 
  const itemListingId = JSON.parse(json)
  console.log(req.params.listingId)

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