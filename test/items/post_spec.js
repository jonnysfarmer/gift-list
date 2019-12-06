/* global describe, beforeEach, afterEach, it, expect, api */
const Item = require('../../models/Item')
const List = require('../../models/List')
const User = require('../../models/User')



describe('POST /items/', () => {

  beforeEach(done => {
    User.create({
      firstname: 'Test',
      surname: 'User',
      email: 'test@user.com',
      password: '12345',
      passwordConfirmation: '12345'
    })
      .then(user => {
        List.create([
          {
            user,
            listName: 'Testing List',
            giftRecipient: 'Gift for',
            listStatus: 'Active',
            itemsSaved: ['12345', '23']
          }
        ])
      })
      .then((user, list) => {
        Item.create([
          {
            id: '684385598',
            user,
            list,
            src: 'etsy',
            //these items are called from Etsy, but am adding here for test purpose
            imgsrc: 'http://test/src',
            listingId: 'etsy-684385598',
            description: 'fake test item',
            currencyCode: 'GBP',
            price: '50.05',
            productName: 'Test Product'
          }
        ])
      })
      .then(() => done())
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => List.deleteMany())
      .then(() => Item.deleteMany())
      .then(() => done())
  })

  it('should return a 200 response', done => {
    api.post(`/api/${User._id}/${List._id}/etsy`)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

})
