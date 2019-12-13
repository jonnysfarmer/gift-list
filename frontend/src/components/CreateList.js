import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import axios from 'axios'
import moment from 'moment'

import auth from '../lib/auth'
// import UseAxios from '../hooks/UseAxios'
import Breadcrumbs from './Breadcrumbs'
import NoteCards from './Components/NoteCards'

// animation for dropdown menu
const animatedComponents = makeAnimated()

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
  //list status is either active (visible) or archived (not visible) on lists/shared list view
  subcategory: ''
  //we're not implementing keywords in MVP but including in data structure for future
}

function CreateList(props) {

  // get all category and subcategory data
  function addCategories() {
    axios.get('http://localhost:8000/api/categories')
      .then(res => manipulateResponseData(res.data))
      .catch(err => console.log(err))
  }

  // load categories for dropdown menu on page load
  useEffect(addCategories, [])

  //get userId
  const userId = auth.getUserId()

  //handle input values: data, function
  const [data, setData] = useState(createListForm)
  const [errors, setErrors] = useState({})
  const [categoriesList, setCategoriesList] = useState([])
  const [subcategoriesList, setSubcategoriesList] = useState([])
  const [subcategoriesSelected, setSubcategoriesSelected] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if ( subcategoriesSelected.length === 0 ) {
      console.log('im empty')
      data.subcategory = [[{
        name: 'Custom',
        value: 'everything_else/custom'
      }]]
    } else {
      console.log('im no empty')
      data.subcategory = [subcategoriesSelected]
    }
    // console.log(data)

    axios.post(`http://localhost:8000/api/lists/${userId}`, data, {
      headers: { Authorization: `Bearer ${auth.getToken()}` }
    })
      .then((resp) => props.history.push(`/lists/${userId}/${resp.data._id}`))
      .catch((err) => {
        setErrors(err.response.data.errors)
      })
  }

  // get subcategories for category selected
  function drillDown(e) {
    const categoryObj = categoriesList.find(elem => {
      return elem.value === e.value
    })
    const temp = categoryObj.subcategories.map((elem) => {
      return {
        value: elem.category_name,
        label: elem.name
      }
    })
    setSubcategoriesList(temp)
  }

  // store subcategories selected in state to post on submit
  function subCatsSelected(e) {
    if (e === null) return null
    const test = e.map((elem) => {
      return {
        value: elem.value,
        name: elem.label
      }
    })
    setSubcategoriesSelected(test)
  }

  // format response data for react select
  function manipulateResponseData(input) {
    const temp = input.map((category) => {
      return {
        value: category.name,
        label: category.short_name,
        subcategories: category.subcategories
      }
    })
    setCategoriesList(temp)
  }

  return <>
    <div className='breadcrumb-container'>
      <Breadcrumbs />
    </div>
    <section className=''>

      <div className='container'>
        <h1 className='title'>Create a list</h1>
        <div className='columns'>
          <div className='column is-half'>
          <form className='form' onSubmit={handleSubmit}>

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

            <h3>Who are you saving gifts for?</h3>
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

            <h3>Is it for a special event?</h3>
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


            <h3>Would you like personalised suggestions?</h3>

            <div className="field">
              <label htmlFor="subcategory" className="label">
                Select a category <span className='optional'>optional</span>
              </label>
              <div className="control select-input">
                <Select
                  options={categoriesList}
                  onChange={drillDown} />

                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  isMulti
                  options={subcategoriesList}
                  onChange={subCatsSelected}
                />
              </div>
              {errors.subcategory && <small className="help is-danger">{errors.subcategory}</small>}
            </div>

            {/* <div className="field">
              <label htmlFor="budget" className="label">
                Add a budget <span className='optional'>optional</span>
              </label>
              <div className='control has-static-text'>
                <input onChange={handleChange} type='text' className='input' name='budget' title='max £' />
                <span className='static-text'>max &pound;</span>
              </div>
              {errors.budget && <small className="help is-danger">{errors.budget}</small>}
            </div> */}

            <button className="button is-rounded">Create list</button>
          </form>
          </div>

          <div className='column is-half'>
            <NoteCards />
          </div>

        </div>
      </div>
    </section>
  </>

}



export default CreateList
