/* global describe, beforeEach, afterEach, it, expect, api */
const List = require('../../models/Animal')
const User = require('../../models/User')

describe('GET /animals', () => {

  beforeEach(done => {
    User.create({
      firstname: 'Jonny',
      surname: 'Farmer',
      email: 'jonny@jonny.com',
      password: 'test',
      passwordConfirmation: 'test'
    })
      .then(users => {
        List.create([
          { 
            user: users[0],
            listName: 'All fields have single value',
            giftRecipient: 'Bob',
            eventName: 'Bob Birthday',
            eventDate: '2020-01-07',
            eventReminder: true,
            budget: '50',
            listStatus: 'Active',
            subcategory: [ 'art/sculpture', 'accessories' ],
            keywords: [],
            itemsSaved: [ '1234556','1234556444'],
            customItem: [ ],
            shareUrl: '' 
          },
          { //seed with all fields holding a single value
            user: users[0],
            listName: 'Billy!',
            giftRecipient: 'Bill',
            eventName: 'Birthday',
            eventDate: '2020-01-09',
            eventReminder: true,
            budget: '10',
            listStatus: 'Active',
            subcategory: [ 'accessories/men' ],
            keywords: [], //not implemented for MVP
            itemsSaved: [ ],
            customItem: [],
            shareUrl: '' //null until we implement url structures
          }
        ])
          .then(() => done())
      })
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => List.deleteMany())
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api.get('/api/animals')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', done => {
    api.get('/api/animals')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        done()
      })
  })
})
