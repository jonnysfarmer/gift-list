const router = require('express').Router() //just the routing/handling of routes part of express
const items = require('./controllers/items')


//ITEMS
router.route('/items/')
  //client requests an item be saved for a list
  .post(items.add)
  //get all items so we can check if new item exists
  .get(items.index)

router.route('/items/:listingId')
  .get(items.show)


module.exports = router