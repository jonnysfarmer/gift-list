import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ListSavedItems = (props) => {

  //===== ICONOGRAPHY =====
  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />

  //===== VARIABLES =====
  let [data, setData] = useState({})

  //===== FUNCTIONS FOR THIS PAGE =====
  function getSavedItems(items) {
    let itemDetail = [] //holds item data for each item
    if (props.listItemsSaved) {
      items.forEach((elem, i) => {
        axios.get(`http://localhost:8000/api/items/${elem}`)
          .then(response => {
            itemDetail = [...itemDetail]
            // console.log(itemDetail)
            itemDetail.push(response.data)
            setData(itemDetail)
          })
        // .catch(err => console.log('error', err))
      })
    }
  }

  function deleteSavedItem(itemId) {
    //remove from this page
    const newArray = [...data]
    console.log(itemId)
    console.log(newArray)
    setData(newArray.filter((elem => { 
      return elem.listingId !== itemId 
    })))
    
    //remove from list data
    // axios.put(`http://localhost:8000/api/lists/${userId}/${listId}`, { dataresultshere })
    //   .then(console.log('done'))
  }





  useEffect(() => {
    getSavedItems(props.listItemsSaved)
  }, [props.listItemsSaved])


  console.log('data', data)

  if (data === {}) { return <div>Loading</div> }
  return (
    <div id='list-name' className='element'>
      <h3>Saved items</h3>
      <ul>
        {Array.from(data).map((elem, i) => {
          return (
            <li key={i}><span onClick={() => deleteSavedItem(elem.listingId)}>{trashIcon}</span> {elem.productName}</li>
          )
        })}
      </ul>


    </div>

  )

}

export default ListSavedItems


