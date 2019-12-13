# GiftList

by [Georg Preuss](https://github.com/georgmp), [JenniKate Wallace](https://github.com/jennikate), [Johnny Farmer](https://github.com/jonnysfarmer)

## The product

[View the app]()
[View the code](https://github.com/georgmp/gift-list)

GIF GOES HERE

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
- Mocha / Chai / Supertest

**Additional Libraries**

- Mongoose Unique Validator : for data type validation
- Bcrypt : for user encryption
- JsonWebToken : for user login
- body-parser : for better handling of body

#### Frontend : technologies used to create our interface and interactions

- ReactJS
- Sass

**Additional Libraries**

- Bulma : for foundation css
- ReactRouter : for links
- Axios : for API requests
- Moment : for nicer date formatting
- Font Awesome : for icons
- React Select : for nice select dropdown

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

We have 4 schema's

**User**

For 
- user registration and login
- identifying logged in user

<img src='https://raw.githubusercontent.com/georgmp/gift-list/development/readme-images/schema-user.png' width='45%;'>

** Category **

For
- mapping store category name/API call name to our category names
- allowing the user to select a category
- determining which category's products to suggest to a user

<img src='https://raw.githubusercontent.com/georgmp/gift-list/development/readme-images/schema-category.png' width='45%;'>

**Item**

For
- holding a local store of saved item details to enable faster loading (should be refreshed every [x]' width='45%;'>
- showing saved items on GiftLists

<img src='https://raw.githubusercontent.com/georgmp/gift-list/development/readme-images/schema-item.png' width='45%;'>

**List**

For
- storing a users saved list data with related Id's to get data from the other schemas
- showing GiftLists to logged in users
- [future] showing a GiftList to a non-logged in user if they have the specific URL

<img src='https://raw.githubusercontent.com/georgmp/gift-list/development/readme-images/schema-list.png' width='45%;'>



### CRUD

**GiftList**

- User can create a list
``` POST '/lists/:userId' ```
- User can retrieve all their list
``` GET '/lists/:userId' ```
- User can retrieve one of their lists
``` GET '/lists/:userId/:listId ```
- User can update their list details (but not categories yet)
``` PUT '/lists/:userId/:listId' ```
- User can archive a list (we don't want to ever fully delete data)
``` PUT '/lists/:userId/:listId' ``` with a status change

**Saved Items (store & custom)**

- Create a saved item for a store item
``` PUT '/lists/:userId/:listId/<storename>' ```
- Create a saved item for a custom item
``` PUT '/lists/:userId/:listId/customItems' ```
- Get all saved store items for this user
``` GET '/lists/:userId/:listId ```
- Get all saved custom items for this user
``` GET '/lists/:userId/:listId/customItems' ```
- User can delete a saved store item
``` PUT '/lists/:userId/:listId' ```
- User can delete a saved custom item
``` DELETE '/lists/:userId/:listId/customItems/:itemId' ```

----

## Hurdles Overcome & Problems to Solve

### Testing schemas

_**not solved**_
We designed 4 schemas, of which two had subschemas, we were fairly confident of our schema types. When it came to seeding our data, we tried to generate an output from User, Category, and Item, then use that in our List seeds. We started seeing cannot read property 0 of undefined. We worked through our data movement and realised that Category and Item were not intrinsically linked to List, List just holds some words/numbers to let the frontend find the right category information. 

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

It utilised multiple API calls both within our backend and out to the Etsy API.

After building the frontend, we realised this was over complicated and did not need to make the call to Etsy as we already had the item data.


----

## Future

### Bugs

If you find any bugs let us know!


### Unexpected hurdles that we deprioritised

- `Show currency symbol` This turned out to be harder than expected and so we deprioritised this and will likely use a library to improve it in the future

### While we are not yet planning to build any of these, we did consider them in the architecture.

- `Show more items` : _show more on load and a show more button_ Currently we show a set of products available from Etsy is currently restricted to no more than 6 items at a time due to restrictions on how many calls we can make per second while on a developer account. Full accounts would allow us to extend this.
- `Browse items` : We would like to have an area of the site where you can browse through categories and add to any of your lists without being on your list page. 
- `Share a GiftList` We would like users to have a shareable list link that they can send to others that just shows the items they've saved
- `Show local currency` Based on Etsy's notes we need to use a currency converter, we deprioritised this for this project
- `Send me a reminder` We'd like to allow the user to receive notifications via email or sms a few weeks before their event
- `Change categories in my filters` We'd like to give you the option to add or remove categories from your list
- `Show trending items` In a few areas we'd like to show a list of trending items, or just a list of various items. 


----

## Installation

----
