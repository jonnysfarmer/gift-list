/* global describe, beforeEach, afterEach, it, expect, api */
const User = require('../../models/User')

const testUserCorrect = {
  firstname: 'nick1',
  surname: 'nickyboy',
  email: 'nick1@nick1',
  password: 'test',
  passwordConfirmation: 'test'
}

const testUserIncorrect = {
  firstname: 'Jonny',
  surname: 'Farmer',
  email: 'nick1@nick1.come',
  password: 'test',
  passwordConfirmation: 'test123'
}


describe('POST /register', () => {

  beforeEach(done => {
    User.create({
      firstname: 'Jonny',
      surname: 'Farmer',
      email: 'jonny@jonny.com',
      password: 'test',
      passwordConfirmation: 'test'
    }).then(() => done())
  })

  afterEach(done => {
    User.deleteMany()
      .then(() => done())
  })

  it('should return a 200 response if request is valid', done => {
    api.post('/api/register')
      .send(testUserCorrect)
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return a 422 response if password !== passwordConfirmation', done => {
    api.post('/api/register')
      .send(testUserIncorrect)
      .end((err, res) => {
        expect(res.status).to.eq(422)
        done()
      })
  })
})
