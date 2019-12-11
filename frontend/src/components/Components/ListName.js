import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'




const ListName = (props) => {

    //===== ICONOGRAPHY =====
  const editIcon = <FontAwesomeIcon icon={faEdit} />
  

  return (
    <div id='list-name' className='element'>
      <h1><span>{editIcon}</span>{props.listName}</h1>
      <h2>{props.listRecipient}</h2> 
    </div>

  )

}

export default ListName
