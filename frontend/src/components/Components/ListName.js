import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'




const ListName = (props) => {

  //===== ICONOGRAPHY =====
  const editIcon = <FontAwesomeIcon icon={faEdit} />

  //===== VARIABLES =====
  const [data, setData] = useState([{}])
  const [editState, setEditState] = useState(false) //can I edit this field? True or False, default to false on load

  //set our propst into data
  const setDataFromProps = () => {
    setData(props)
  }

  //===== FUNCTIONS FOR THIS COMPONENT ======
  function canEdit(state) {
    if (state !== editState)
      setEditState(state)
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSave = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/lists/${props.userId}/${props.listId}`, data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
    .catch(err => console.log(err))
    //update our page data
    setData(data)
    //update editable status
    canEdit(false)
  }

  const handleCancel = (e) => {
    e.preventDefault()
    canEdit(false)
  }

  useEffect(() => {
    setDataFromProps(props)
  }, [props])


  return (
    <div id='list-name'>

      <div className={`element ${editState ? 'hide' : 'show'}`}>
        <h1><span onClick={() => { canEdit(true) }}>{editIcon}</span> {data.listName}</h1>
        <h2>{data.giftRecipient}</h2>
      </div>


      <form onSubmit={handleSave} className={`form ${editState ? 'show' : 'hide'}`}>
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
        <button className='button save'>Save changes</button>
        <button className="button cancel" onClick={handleCancel}>Cancel changes</button>
      </form>



    </div>
  )

}

export default ListName
