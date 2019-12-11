import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


const ListEvent = (props) => {

    //===== ICONOGRAPHY =====
  const editIcon = <FontAwesomeIcon icon={faEdit} />
  

  return (
    <div id='list-event' className='element'>

      <h2><span>{editIcon}</span>Event Details</h2>
      <p>{props.listEventName}</p>
      <p>{moment(props.listEventDate).format('DD-MM-YYYY')}</p> 
      <p>{props.listEventReminders}</p>
    </div>

  )

}

export default ListEvent
