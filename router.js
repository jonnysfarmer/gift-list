const router = require('express').Router()
const users = require('./controllers/users')


// --- User Routes
// Additional features would be to change your login details
//would require .put to /login/:userId

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)