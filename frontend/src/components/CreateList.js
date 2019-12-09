import React, { useState, useEffect  } from 'react'
import axios from 'axios'
// import ReactDOM from 'react-dom'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

//setup our fields needed
const createListForm = {
  user: '',
  listName: '',
  //this must be 'me' or anyone else you enter
  giftRecipient: '',
  //you can optionally attach this list to an event, all event fields are independently optional you can fill out one, all, none
  eventName: '',
  eventDate: '',
  eventReminder: '',
  //budget is also optional, but must be turned to the correct format for passing on APIs by the front end
  budget: '', //budget is always stored as GBP
  //list status is either active (visible) or archived (not visible) on dashboard/shared list view
  subcategory: ''
  //we're not implementing keywords in MVP but including in data structure for future
}


function CreateListForm(props) {

  //get user id

  //handle input values: data, function
  const [data, setData] = useState(createListForm)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({})
    console.log(data)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/lists/:userId', data)
      //get list id
      .then(() => props.history.push(`/lists/${userId}/${listId}`))
      .catch((err) => {
        setErrors (err.response.data.errors )
      })
  }




  return <>
    <section className='section'>
      <div className='container'>
        <h1>Create a list</h1>
        <div className='container columns'>

          <form className='form column'>

          </form>

          <aside className='aside column columns'>
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

          </aside>

        </div>
      </div>
    </section>
  </>

}





