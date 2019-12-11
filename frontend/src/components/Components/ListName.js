import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'




const ListName = (props) => {

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




  return (
    <div id='list-name'>

      <div className={`element ${editState ? 'hide' : 'show'}`}>
        <h1><span onClick={() => { canEdit(true) }}>{editIcon}</span> {data.listName}</h1>
        <h2>for {data.giftRecipient}</h2>
      </div>


      <form className={`form ${editState ? 'show' : 'hide'}`}>
        <div className="field">
          <label htmlFor="listName" className="label">
            Your list name
          </label>
          <div className="control">
            {data.listName && <input className='input' type='text' name='listName' defaultValue={data.listName} onChange={((e) => handleChange(e))} />}
          </div>
        </div>
        <div className="field">
          <label htmlFor="giftRecipient" className="label">
            Your list name
          </label>
          <div className="control">
            {data.giftRecipient && <input className='input' type='text' defaultValue={data.giftRecipient} name='giftRecipient' onChange={((e) => handleChange(e))} />}
          </div>
        </div>
        <button className='button save' onClick={((e) => handleSave(e))} >Save changes</button>
        <button className='button cancel' onClick={((e) => handleCancel(e))}>Cancel changes</button>
      </form>

    </div>
  )

}

export default ListName
