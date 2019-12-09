import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import ReactDOM from 'react-dom'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

import auth from '../lib/auth'

//setup our fields needed
const createListForm = {
  user: '',
  listName: '',
  //this must be 'me' or anyone else you enter
  giftRecipient: '',
  //you can optionally attach this list to an event, all event fields are independently optional you can fill out one, all, none
  eventName: '',
  eventDate: '',
  eventReminder: false,
  //budget is also optional, but must be turned to the correct format for passing on APIs by the front end
  budget: '', //budget is always stored as GBP
  //list status is either active (visible) or archived (not visible) on dashboard/shared list view
  subcategory: ''
  //we're not implementing keywords in MVP but including in data structure for future
}


function CreateList(props) {

  //get userId
  const userId = auth.getUserId()

  //get categories for use in select list
  


  //handle input values: data, function
  const [data, setData] = useState(createListForm)
  const [errors, setErrors] = useState({})


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userId)
    axios.post(`http://localhost:8000/api/lists/${userId}`, data, {
      headers: { Authorization: `Bearer ${auth.getToken()}` }
    })
      .then((resp) => props.history.push(`/lists/${userId}/${resp.data._id}`))
      .catch((err) => {
        setErrors(err.response.data.errors)
        console.log(err)
      })
  }


  return <>

    <section className='section'>
      <div className='container'>
        <h1>Create a list</h1>
        <div className='container columns'>

          <form className='form column' onSubmit={handleSubmit}>

            <div className="field">
              <label htmlFor="listName" className="label">
                Give your list a name
              </label>
              <div className="control">
                <input onChange={handleChange} type="text" className="input" name="listName">
                </input>
              </div>
              {errors.listName && <small className="help is-danger">{errors.listName}</small>}
            </div>

            <h2>Who are you saving gifts for?</h2>
            <div className="field">
              <label htmlFor="giftRecipient" className="label">
                Enter a name, or even yourself!
              </label>
              <div className="control">
                <input onChange={handleChange} type="text" className="input" name="giftRecipient">
                </input>
              </div>
              {errors.giftRecipient && <small className="help is-danger">{errors.giftRecipient}</small>}
            </div>

            <h2>Is it for a special event?</h2>
            <div className="field">
              <label htmlFor="eventName" className="label">
                Event name <span className='optional'>optional</span>
              </label>
              <div className="control">
                <input onChange={handleChange} type="text" className="input" name="eventName">
                </input>
              </div>
              {errors.eventName && <small className="help is-danger">{errors.eventName}</small>}
            </div>
            <div className="field">
              <label htmlFor="eventDate" className="label">
                Event date <span className='optional'>optional</span>
              </label>
              <div className="control">
                <input onChange={handleChange} type="date" className="input" name="eventDate">
                </input>
              </div>
              {errors.eventDate && <small className="help is-danger">{errors.eventDate}</small>}
            </div>
            <div className="field">
              <label htmlFor="eventReminder" className="label">
                Would you like an email reminder two weeks before? <span className='optional'>optional</span>
              </label>
              <div className="control">
                <input onChange={handleChange} type="checkbox" className="checkbox" name="eventReminder">
                </input>
              </div>
              {errors.eventReminder && <small className="help is-danger">{errors.eventReminder}</small>}
            </div>

            <h2>Would you like personalised suggestions?</h2>


            <div className="field">
              <label htmlFor="subcategory" className="label">
                Select a category <span className='optional'>optional</span>
              </label>
              <div className="control">
                <input onChange={handleChange} type="text" className="input" name="subcategory">
                </input>
              </div>
              {errors.subcategory && <small className="help is-danger">{errors.subcategory}</small>}
            </div>


            <div className="field">
              <label htmlFor="budget" className="label">
                Add a budget <span className='optional'>optional</span>
              </label>
              <div className="control">
                <input onChange={handleChange} type="text" className="input" name="budget">
                </input>
              </div>
              {errors.budget && <small className="help is-danger">{errors.budget}</small>}
            </div>



            <button className="button">Create list</button>

          </form>

          {/* <aside className='aside column columns'>
            <h2>Start with one of our lists</h2>

            <div className='column'>
              <img alt='imageName' />
              <span>img above, text over img</span>
            </div>
            <div className='column'>
              <img alt='imageName' />
              <span>img above, text over img</span>
            </div>
            <div className='column'>
              <img alt='imageName' />
              <span>img above, text over img</span>
            </div>
            <div className='column'>
              <img alt='imageName' />
              <span>img above, text over img</span>
            </div>
            <div className='column'>
              <img alt='imageName' />
              <span>img above, text over img</span>
            </div>
            <div className='column'>
              <img alt='imageName' />
              <span>img above, text over img</span>
            </div>
            <div className='column'>
              <img alt='imageName' />
              <span>img above, text over img</span>
            </div>
            <div className='column'>
              <img alt='imageName' />
              <span>img above, text over img</span>
            </div>
            <div className='column'>
              <img alt='imageName' />
              <span>img above, text over img</span>
            </div>

          </aside> */}

        </div>
      </div>
    </section>
  </>

}



export default CreateList
