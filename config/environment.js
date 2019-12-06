const port = 8000
const dbURIPrefix = 'mongodb://localhost/'
const dbName = 'gift-list'
const dbURI = dbURIPrefix + dbName
const secret = 'whatever'
const APIKey = ''

module.exports = {
  port,
  dbURI,
  secret,
  APIKey
}