const router = require('express').Router() //just the routing/handling of routes part of express
const users = require('./controllers/users')
const lists = require('./controllers/lists')
const items = require('./controllers/items')


//ITEMS
router.route('/items/')
  //client requests an item be saved for a list
  .post(items.add)
  //get all items so we can check if new item exists
  .get(items.index)

router.route('/items/:listingId')
  .get(items.show)

//future things, have a put and a delete so we can refresh the data from the source regularly and mark/remove anything that's changed

// --- User Routes
// Additional features would be to change your login details
//would require .put to /login/:userId

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

//-----LIST routs

router.route('/lists')
  .get(lists.index) // works

router.route('/lists/:userId')
  .get(lists.userAll) // works
  .post(lists.create) // works - had to change List Schema that user wasnt required

router.route('/lists/:userId/:listId')
  .get(lists.oneList) // works
  .put(lists.editList) // works.  Added extra sub category

router.route('/lists/:userId/:listId/customItems')
  .get(lists.allCustomItems) // works.  Doesnt auto addID
  .post(lists.addItem) //postd 2, all works well.  

router.route('/lists/:userId/:listId/customItems/:itemId')
  .put(lists.editCustomItems) // works
  .delete(lists.removeCustomItem) // works

router.route('/lists/public/:listId')
  .get(lists.publicList) // works


module.exports = router