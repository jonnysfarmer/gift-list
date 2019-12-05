const router = require('express').Router()
const users = require('./controllers/users')
const lists = require('./controllers/lists')


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