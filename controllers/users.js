const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res, next) {
  User
    .create(req.body) 
    .then(() => res.status(200).json({ message: 'Thank you for registering' })) 
    .catch(next)
}
// user log in! the next is for the error handling message.

function login(req, res) {
  User
    .findOne({ email: req.body.email }) 
    .then(user => { 
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' }) 
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      res.status(202).json({ message: `Welcome Back ${user.firstname}`, token })
    }) 
    .catch(() => res.status(401).json({ message: 'Unauthorized' } ))
}

module.exports = {
  register,
  login
}