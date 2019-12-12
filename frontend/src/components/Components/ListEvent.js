import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import Auth from '../../lib/auth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


const ListEvent = (props) => {

  //===== ICONOGRAPHY =====
  const editIcon = <FontAwesomeIcon icon={faEdit} />


  //===== VARIABLES =====
  const [data, setData] = useState({})
  const [tempData, setTempData] = useState() //on handle change we set the temp date into here so we can either save it, or cancel changes
  const [editState, setEditState] = useState(false) //can I edit this field? True or False, default to false on load

  //initiate our data from our props
  const setDataFromProps = () => {
    setData(props)
    setTempData(props)
  }

  //===== FUNCTIONS FOR THIS COMPONENT ======
  //can probably extract these to a shared component, currently only used by two components though so deprioritising that activity
  function canEdit(state) {
    if (state !== editState)
      setEditState(state)
  }

  const handleChange = (e) => {
    setTempData({ ...tempData, [e.target.name]: e.target.value })
  }

  const handleSave = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/lists/${props.userId}/${props.listId}`, tempData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .catch(err => console.log(err))
    //update our page data
    setData(tempData)
    //update editable status
    canEdit(false)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    //clear temp data and return it to original data
    //set fields to non-editable
    canEdit(false)
  }

  useEffect(() => {
    setDataFromProps(props)
  }, [props])


console.log('remind', data.eventReminder)
  return (

    <div id='list-event'>
      <div className={`element ${editState ? 'hide' : 'show'}`}>
        {data.eventName && <h2><span className='interactive-icon clickable' onClick={() => { canEdit(true) }}>{editIcon}</span>{data.eventName}</h2>}
        {data.eventDate && <p>on {moment(data.eventDate).format('DD-MM-YYYY')}</p>}
      </div>

      <form className={`form ${editState ? 'show' : 'hide'}`}>
        {data.eventName && <div className="field">
          <label htmlFor="eventName" className="label">
            Your event name
          </label>
          <div className="control">
            <input className='input' type='text' name='eventName' defaultValue={data.eventName} onChange={((e) => handleChange(e))} />
          </div>
        </div>}
        {data.eventDate && <div className="field">
          <label htmlFor="eventDate" className="label">
            Your event date
          </label>
          <div className="control">
            <input className='input' type='date' defaultValue={moment(data.eventDate).format('YYYY-MM-DD')} name='eventDate' onChange={((e) => handleChange(e))} />
          </div>
        </div>}
        <button className='button save is-rounded' onClick={((e) => handleSave(e))} >Save changes</button>
        <button className='button cancel is-rounded' onClick={((e) => handleCancel(e))}>Cancel changes</button>
      </form>

    </div>



  )

}

export default ListEvent
