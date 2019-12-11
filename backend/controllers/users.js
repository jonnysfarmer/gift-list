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
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '12h' })
      res.status(202).json({ id: user._id, token })
    }) 
    .catch(() => res.status(401).json({ message: 'Invalid credentials' } ))
}

function getInfo(req, res) {
  User.findById(req.params.userId)
    .then(user => {
      if (!user) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(user)
    })
    .catch(err => res.status(400).json({ message: err }))
}

module.exports = {
  register,
  login,
  getInfo
}