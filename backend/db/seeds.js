const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')

const User = require('../models/User')
const Category = require('../models/Category')
const Item = require('../models/Item')
const List = require('../models/List')

const getEtsyCategories = require('../db/categoryseed')

//test data set to pump into your database for dev purposes
//it will delete anything that is currently in your database
//this is a stand alone programme, it is not run out of app.js or connected to it!

//connect mongoose to db 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  //this takes error and db params
  (err, db) => {
    //if it errors trying to connected to db, console log the error
    if (err) return console.log(err)
    //drop the db (clears any existing records)
    db.dropDatabase()
      .then(() => {
        return User.create([
          {
            firstname: 'DevUser',
            surname: 'world',
            email: 'user@dev.com',
            password: '12345',
            passwordConfirmation: '12345'
          },
          {
            firstname: 'Hello',
            surname: 'Time',
            email: 'user@time.com',
            password: '12345',
            passwordConfirmation: '12345'
          },
          {
            firstname: 'Jen',
            surname: 'Wallace',
            email: 'jen@email.com',
            password: '12345',
            passwordConfirmation: '12345'
          }
        ])
      })
      .then(users => {
        return List.create([
          {
            user: users[0],
            listName: 'All fields have single value',
            giftRecipient: 'Bob',
            eventName: 'Bob Birthday',
            eventDate: '2020-01-07',
            eventReminder: true,
            budget: '50',
            listStatus: 'Active',
            subcategory: ['art/sculpture', 'accessories'],
            keywords: [],
            itemsSaved: ['etsy-1234556', 'etsy-1234556444'],
            customItem: [],
            shareUrl: ''
          }, {
            user: users[0],
            listName: 'All fields have single value',
            giftRecipient: 'Bob',
            eventName: 'Bob Birthday',
            eventDate: '2020-01-07',
            eventReminder: true,
            budget: '50',
            listStatus: 'Active',
            subcategory: ['art/sculpture', 'accessories'],
            keywords: [],
            itemsSaved: ['etsy-1234556', 'etsy-1234556444'],
            customItem: [
              {
                note: 'Custom One',
                url: 'http://url.html'
              }, {
                note: 'Nice Custom',
                url: 'http://url-blob.html'
              }, {
                note: 'Another Item with a much longer note cause I like to write long notes',
                url: 'https://a-stupid-long-url.com/l/15601480031/ref=gw_uk_desk_h1_aucc_crckpscs_tpr5_q4_fc_1219?pf_rd_p=3d8dd84b-7d9c-4ec2-99e1-0a73c0da4416&pf_rd_r=Z2W05YN47SWP2T2H977Y'
              }
            ],
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
            subcategory: ['accessories/men'],
            keywords: [], //not implemented for MVP
            itemsSaved: [],
            customItem: [],
            shareUrl: '' //null until we implement url structures
          },
          { //seed with all fields holding a single value
            user: users[1],
            listName: 'Other User List',
            giftRecipient: 'BAM',
            eventName: 'BAM XMAS',
            eventDate: '2020-12-25',
            eventReminder: true,
            budget: '25',
            listStatus: 'Active',
            subcategory: ['art/painting'],
            keywords: [], //not implemented for MVP
            itemsSaved: ['etsy-1234556444'],
            customItem: [],
            shareUrl: '' //null until we implement url structures
          },
          { //seed with all fields holding a single value
            user: users[1],
            listName: 'All fields have single value',
            giftRecipient: 'Timmy',
            eventName: 'Timmy Birthday',
            eventDate: '2020-01-07',
            eventReminder: true,
            budget: '50',
            listStatus: 'Active',
            subcategory: ['accessories/men', 'art/painting'],
            keywords: [], //not implemented for MVP
            itemsSaved: ['etsy-1234556', 'etsy-1234556444'],
            customItem: [],
            shareUrl: '' //null until we implement url structures
          }

        ])
      })
      // etsy categories and subcategories get returned from the promise below
      .then(() => {
        return getEtsyCategories()
      })
      .then(categoryResp => {
        console.log('123 ', categoryResp[0])
        return Category.create(
          categoryResp
        )
      })
      .then(() => {
        return Item.create([
          {
            productName: 'Rubber Chicken',
            price: '2.99',
            currencyCode: 'GBP',
            description: 'One large rubber chicken',
            src: 'www.rubberchicken.com',
            listingId: 'etsy-1234556',
            imgsrc: 'wwww.rubberchicken.com/pics'
          },
          {
            productName: 'novalty mug',
            price: '3.99',
            currencyCode: 'GBP',
            description: 'One large MUG for muggy people',
            src: 'www.largemugs.com',
            listingId: 'etsy-1234556444',
            imgsrc: 'www.largemugs.com/pics'
          },
          {
            productName: 'novalty Pen',
            price: '1.99',
            currencyCode: 'GBP',
            description: 'One large Pen for pen people',
            src: 'www.largepens.com',
            listingId: 'etsy-1234556434',
            imgsrc: 'www.largepens.com/pics'
          }
        ])
      })
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  })