# GiftList

by [Georg Preuss](https://github.com/georgmp), [JenniKate Wallace](https://github.com/jennikate), [Johnny Farmer](https://github.com/jonnysfarmer)

## The product

[View the app]()
[View the code](https://github.com/georgmp/gift-list)

### Overview

GiftList is an app where you can 

- browse goods from Etsy (and in future other retailers)
- create a giftlist for yourself, or someone else, with the option to add
  - events (name, date, reminders)
  - items from our app
  - notes/urls from anywhere
  - categories
- the app returns suggestions based on categories and/or events, or from Etsy's top lists if you do not specify categories or event
- you can browse through all available items by category/subcategory, even if you're not logged in
- you can save items from the suggestion list or from browsing all categories

_add link to jump to installation_

### Screenshots

----

## The brief

You must:

* Work in a team, using git to code collaboratively.
* Build a full-stack application by making your own backend and your own front-end
* Use an Express API to serve your data from a Mongo database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
* Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
* Be deployed online so it's publicly accessible.
* Have automated tests for _at least_ one RESTful resource on the back-end. Improve your employability by demonstrating a good understanding of testing principals.


----

## Technologies used

#### Backend : technologies used to create our Schema's and API

- Mongoose
- Express

**Additional Libraries**

- Mongoose Unique Validator : for data type validation
- Bcrypt : for user encryption
- JsonWebToken : for user login
- Cors : for 

#### Frontend : technologies used to create our interface and interactions

- ReactJS
- Sass

**Additional Libraries**

- Bulma : for foundation css
- ReactRouter : for links

_add link to jump to installation_

#### Management : tools used for planning and delivery management

- Trello : for task management
- Figma : for wireframing

----

## The planning

_wireframes, sketches, architecture, etc go here too_

----


## The development

### Config and middleware

### Schema creation

### CRUD

----

## Hurdles Overcome & Problems to Solve

### Creating multiple schemas

_**solved**_
We designed 4 schemas, of which two had subschemas, we were fairly confident of our schema types. When it came to seeding our data, we tried to generate an output from User, Category, and Item, then use that in our List seeds. We started seeing cannot read property 0 of undefined. We worked through our data movement and realised that Category and Item were not intrinsically linked to List, List just holds some words/numbers to let the frontend find the right category information. We updated our seed data accordingly and it 

### Saving an item to a list in the backend

_**solved**_
We wanted to store a copy of any item a user saved to our database so we could track them, and so we could serve them up to users more easily. The challenge here was that when a user clicked 'save' and the client made the POST API call, we needed to 
1. check if that item was already in our database 
  - we do a `GET` request to our `item database` for a single item by its `listingId`. 
2. if we get a 'success' then we know it exists and we then `PUT` the `listingId` to that users `listId` to be stored against the user
3. if we get an 'error' then we know it does not yet exist and
  - we make a call to Etsy with the `id` asking for the item data we need (this function is a generic function we use to get any Etsy item)
  - if we get a sucess, then we `POST` the item to our `item database` & we `PUT` the `listingId` to that users `listId`
  - if we get a fail, then we send an error back to the client and ask them to try again

Once the basis of that worked, the next challenge was to create success and error messages. After some investigation determined where to add success responses, and while creating tests determined how to handle errors to client.

It utilises multiple API calls both within our backend and out to the Etsy API.


----

## Future

### Bugs

Currently we need to re-login in everytime we change something, otherwise the token validation fails

### These are items we wish to improve on

- `Suggested Lists` which is just 9 category names that are currently hard coded in the front end. We would like to move to our backend and let the frontend make an API call to populated them.
- `Categories` currently we create a dataset which has a set of categories with an array of their subcategories and an array of their Etsy subcategory names for making API calls to Etsy. On reflection, we'd like to refactor this to be a set of objects that have subcategory name, Esty name, otherstore name, otherstore name. We've left that on the to do list as it doesn't impact the current features, and only comes into play when we add a second store.

### While we are not yet planning to build any of these, we did consider them in the architecture.


----

## Installation

----
