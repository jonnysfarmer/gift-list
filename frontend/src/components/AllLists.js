import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import Auth from '../lib/auth'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const AllLists = ({ data }) => {
  let history = useHistory()
  let [status, setStatus] = useState({})
  const userId = Auth.getUserId()

  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />

  const handleClick = (elem) => {
    history.push(`/lists/${elem.user._id}/${elem._id}`)
  }

  function archiveList(e, listId) {
    e.preventDefault()
    axios.put(`http://localhost:8000/api/lists/${userId}/${listId}`, { listStatus: 'Archived' }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(setStatus('Archived'))
      .catch(err => console.log(err))
  }

  //do an on hover funciton on each element.
  // console.log(data)
  return (
    <div>

      {data.map((ele, i) => {
        return (
          <> {ele.listStatus === 'Active' && 
          <div className='container lists' key={i} onClick={() => handleClick(ele)}>
            <div className='columns'>
              <div className='column'>
                <p className="subtitle is-5">{ele.listName}</p>
                <p>{moment(ele.eventDate).format('DD-MM-YYYY')}</p>
              </div>
              <div className='column'>
                <p>Number of gifts saved: {ele.itemsSaved.length + ele.customItem.length}</p>
              </div>
              <div className='column'>
                <p onClick={((e) => archiveList(e, ele._id))}>{trashIcon}</p>
              </div>
            </div>
          </div>}
          </>
        )
      })}
    </div>
  )
}

export default AllLists