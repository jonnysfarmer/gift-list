
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true,
  toJSON: {
    transform(doc, json) {
      return { name: json.firstname }
    }
  }
})
// returns first name  as the result.  Unique field is email

userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

//creates a virtual pw confirmation field


userSchema
  .pre('validate', function checkPassword(next) {
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('password confirmation', 'does not match passsword')
    }
    next()
  })

//basically - make sure that PW and PW confirmation matches, even if modified

userSchema
  .pre('save', function hasPassword(next) {
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
    }
    next()
  })

// saves new password if modified

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}
//function that validates password


userSchema.plugin(uniqueValidator)


module.exports = mongoose.model('User', userSchema)