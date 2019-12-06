const port = 8000
const dbURIPrefix = 'mongodb://localhost/'
const dbName = 'gift-list'
const dbURI = dbURIPrefix + dbName
const secret = 'whatever'
const APIKey = '0b6tytx6ibc1jzi7gd790l0a'

module.exports = {
  port,
  dbURI,
  secret,
  APIKey
}