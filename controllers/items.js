const Item = require('../models/Item')
const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8000/api'

/*These functions work as follows

1. user clicks 'save an item' & client sends post request
2. function add(req,res) is triggered
  2b. this calls checkItemDb passing through the store and id (to create listingId) so axios can make a GET call to our item database to see if the listingId exists already
3. if axiosGET receives a successful response, then it runs the success scenario - itemExists function
4. if axiosGET receives an error response, then it runs the getItemFromEtsy(id) function
  4b. then it runs the POST scenario - addItem function
*/


//Check our item db to see if item is already in there
function checkItemDb(body) {
  axios.get(`/items/${body.src}-${body.id}`)
    .then(res => {
      itemExists(res.data.listingId)
    })
    //axios is going to error here if the url is bad, aka the item doesn't exist in the database
    .catch(err => {
      addItem(body)
    })

}

//If the item is in our database, send the listingId to the list
function itemExists(listingId) {
  console.log('item already in database', listingId)
  //here is where we make a POST to the listId for this user, passing it the listingId & hopefully chaining back the success result to the user!
}

//If the item is not in our database, get the item details from Etsy
function addItem(body) {
  console.log('add item', body)
  Item
    .create(body)
    // need to send a valid response back
}

//Once we have data from Etsy, post it to our database


function add(req, res) {
  checkItemDb(req.body)

}





  //call the show function via the router so we can pass the listingId on the url (there must be a better way than this!)
  // axios.get(`/items/${req.body.store}-${req.body.id}`)
  //   .then(res => {
  //     console.log(res.data.listingId)
  //     console.log(req.body)
  //     Item
  //       .create(req.body)
  //       //send a response back with the result, 201 is creation successful
  //       .then(item => res.status(201).json(item))
  //       //catch errors from the post, this just logs them to our console
  //       .catch(err => res.status(401).json({ status: 401, message: 'Creation failed', error: err }))
  //   })

  //   //if is error then we'll run our post
  //   //axios is going to error here if the url is bad, aka the item doesn't exist in the database
  //   .catch(err => console.log(err))


  // .then(res => res.status(200).json(res.data.listingId))







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