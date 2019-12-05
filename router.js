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
  .post(lists.create)

router.route('/lists/:userId/:listId')
  .get(lists.oneList) // works
  .put(lists.editList)

router.route('/lists/:userId/:listId/customItems')
  .get(lists.allCustomItems)
  .post(lists.addItem)

router.route('/lists/:userId/:listId/customItems/:itemId')
  .put(lists.editCustomItems)
  .delete(lists.removeCustomItem)

router.route('/lists/public/:listId')
  .get(lists.publicList) // works


module.exports = router