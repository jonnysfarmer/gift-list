import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'
import Auth from '../lib/auth'

require('dotenv').config()
// taken etsy key off so it's not committed to github



const SingleList = (props) => {
  //variables for getting the list info
  const [data, setData] = useState({})
  const [errors, setErrors] = useState([])
  const [cat, setCat] = useState([])
  const [etsy, setEtsy] = useState([])

  //variables for editing
  const [editActive, setEditState] = useState(true) //set default to true so it's in non-edit mode
  const editList = {
    user: '',
    listName: '',
    giftRecipient: '',
    eventName: '',
    eventDate: '',
    eventReminder: false, budget: ''
  }

  //global variables 
  const userID = props.match.params.userId
  const listID = props.match.params.listId

  //for getting the list info
  const listHook = () => {
    axios.get(`http://localhost:8000/api/lists/${userID}/${listID}`)
      .then(response => {
        setData(response.data)
        setCat(response.data.subcategory)
        // etsyHook(response.data.subcategory[0])
      })
      .catch(err => setErrors(err))
  }
  //for getting suggestions from Etsy
  // const etsyHook = (cat) => {
  //   axios.get(`http://openapi.etsy.com/v2/listings/active/?region=GB&category=${cat}&limit=10&api_key=${etsyKey}`)
  //     .then(response => {
  //       setEtsy(response.data)
  //     })
  //     .catch(err => setErrors(err))
  // }

  //for allowing a user to edit a field
  //the code in the form checks to see if editActive is true (which means the fields are not editable)
  //if it is true, then it calls this function to switch the state and thus display the input fields
  //the save button calls the PUT, then editField to save the changes and set fields back to 'edit'
  //the cancel button ignores any edits and sets fields back to 'non editable'
  function editField(e) {
    console.log(e.target)
    setEditState(!editActive)
  }

  //for putting the edited field back to our database
  function saveEdit(e) {
    e.preventDefault()
    console.log(`/api/lists/${userID}/${listID}`)
    axios.put(`http://localhost:8000/api/lists/${userID}/${listID}`, data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(console.log('done'))
      .catch(err => console.log(err))
  }

  // show 5 

  // console.log(etsy)
  // console.log(cat)
  useEffect(listHook, [])

  if (data === {} || etsy === {}) return <div>Loading</div>
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <div className='container'>
              <div className='title'>
                <h1 className={`${editActive ? '' : 'not-editable'}`}>{data.listName} <span className='edit-link' onClick={editField}>edit</span></h1>
                <div className={`${editActive ? 'not-editable' : ''}`}>
                  <input className='input' value={data.listName} name='listName' />
                </div>
              </div>
              <div className='subtitle'>
                <p className={`edit ${editActive ? '' : 'not-editable'}`}>{data.giftRecipient} <span className='edit-link' onClick={editField}>edit</span></p>
                <div className={`${editActive ? 'not-editable' : ''}`}>
                  <input className='input' value={data.giftRecipient} name='giftRecipient' />
                </div>
              </div>
              <div className='subtitle'>
                <p className={`edit ${editActive ? '' : 'not-editable'}`}>{data.eventDate}  <span className='edit-link' onClick={editField}>edit</span></p>
                <div className={`${editActive ? 'not-editable' : ''}`}>
                  <input className='input' value={data.eventDate} name='eventDate' />
                </div>
              </div>
              <div className='subtitle'>
                <p className={`edit ${editActive ? '' : 'not-editable'}`}>{data.eventName}  <span className='edit-link' onClick={editField}>edit</span></p>
                <div className={`${editActive ? 'not-editable' : ''}`}>
                  <input className='input' value={data.eventName} name='eventDate' />
                </div>
              </div>
            </div>
            <button onClick={editField}>Save</button>
            <button onClick={editField}>Cancel</button>
            {/* <div className='container'>
              {etsy.map((ele, i)=>{
                return (
                  <p>{ele.title}</p>
                )
              })}
            </div> */}
          </div>
          <div className='column'>
            Column 2
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleList