const List = require('../models/List')


function index(req, res) {
  List
    .find()
    // .populate('user')
    .then(list => res.status(200).json(list))
    .catch(err => res.status(400).json(console.log(err)))
}

function userAll(req, res) {
  List.find({ user: req.params.userId })
    .populate('user')
    .then(lists => res.status(200).json(lists))
    .catch(err => res.status(400).json(console.log(err)))

}

function create(req, res, next) {
  req.body.user = req.currentUser
  req.body.listStatus = 'Active'
  List.create(req.body)
    .then(list => res.status(201).json(list))
    .catch(next)
}

function oneList(req, res) {
  List.findById(req.params.listId)
    .then(list => {
      if (!list) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(list)
    })
    .catch(err => res.status(400).json(console.log(err)))
}
//Have temp taken off user varification for Dev purposes
function editList(req, res) {
  console.log('editlist', req.body)
  List.findById(req.params.listId)
    .then(list => {
      if (!list) return res.status(404).json({ message: '404 Not found' })
      // if (!req.currentUser._id.equals(list.user)) return res.status(401).json({ message: 'This is not your List' })
      return list.set(req.body)
    })
    .then(list => list.save())
    .then(list => res.status(202).json(list))
    .catch(err => res.status(400).json(console.log(err)))
}

function addEtsyItem(req,res){
  console.log(req.body)
  req.body.user = req.currentUser
  List.findById(req.params.listId)
    .then(list => {
      if (!list) return res.status(404).json({ message: 'Not Found' })
      list.itemsSaved.push(req.body.item)
      return list.save()
    })
    .then(list => res.status(201).json(list))
    .catch(err => res.status(404).json(console.log(err)))
}



function publicList(req, res) {
  List.findById(req.params.listId)
    .then(list => {
      if (!list) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(list.user)
    })
    .catch(err => res.status(400).json(console.log(err)))
}

//THIS ONE , WE WANT TO DISPLAY LESS INFORMATION

function addItem(req, res) {
  req.body.user = req.currentUser
  List.findById(req.params.listId)
    .then(list => {
      if (!list) return res.status(404).json({ message: 'Not Found' })
      list.customItem.push(req.body)
      return list.save()
    })
    .then(list => res.status(201).json(list))
    .catch(err => res.status(404).json(console.log(err)))
}

function allCustomItems(req, res) {
  List.findById(req.params.listId)
    .then(list => {
      if (!list) res.status(404).json({ message: '404 Not found' })
      else res.status(200).json(list.customItem)
    })
    .catch(err => res.status(400).json(console.log(err)))
}

//Has Verification need to put on
function editCustomItems(req, res) {
  List
    .findById(req.params.listId)
    .then(list => {
      if (!list) return res.status(404).json({ message: 'Not Found' })
      // if (!req.currentUser._id.equals(list.user)) return res.status(401).json({ message: 'This is not your List' })
      const item = list.customItem.id(req.params.itemId)
      item.set(req.body)
      return list.save()
    })
    .then(list => res.status(200).json(list))
    .catch(err => res.status(404).json(console.log(err)))
}
//Has Verification need to put on

function removeCustomItem(req, res) {
  List
    .findById(req.params.listId)
    .then(list => {
      if (!list) return res.status(404).json({ message: 'Not Found' })
      // if (!req.currentUser._id.equals(list.user)) return res.status(401).json({ message: 'This is not your List' })
      const item = list.customItem.id(req.params.itemId)
      item.remove()
      return list.save()
    })
    .then(list => res.status(200).json(list))
    .catch(err => res.status(404).json(console.log(err)))

}



module.exports = {
  index,
  userAll,
  create,
  oneList,
  editList,
  publicList,
  addItem,
  allCustomItems,
  editCustomItems,
  removeCustomItem,
  addEtsyItem


}

