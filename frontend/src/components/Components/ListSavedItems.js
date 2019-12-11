import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ListSavedItems = (props) => {
  // console.log('saved', props)
  //===== ICONOGRAPHY =====
  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />

  //===== VARIABLES =====
  let [data, setData] = useState({})
  

  //===== FUNCTIONS FOR THIS PAGE =====
  function getSavedItems(items) {
    console.log('Imma get some items')
    console.log(props)
    let itemDetail = [] //holds item data for each item

    console.log('props', props.itemsSaved)

    if (props.itemsSaved) {
      items.map((elem, i) => {
        axios.get(`http://localhost:8000/api/items/${elem}`)
          .then(response => {
            itemDetail = [...itemDetail]
            // console.log(itemDetail)
            itemDetail.push(response.data)
            setData(itemDetail)
          })
        .catch(err => console.log('error', err))
      })
    }
  }

  function deleteSavedItem(itemId) {
    //remove from this page
    const newArray = [...data]
    const updatedArray = newArray.filter((elem => { 
      return elem.listingId !== itemId 
    }))
    setData(updatedArray)
    //get just the listingId from the newArray
    let updatedListingIds = []
    updatedArray.map(elem => {
      updatedListingIds = [...updatedListingIds]
      updatedListingIds.push(elem.listingId)
    })
    //remove from list data
    axios.put(`http://localhost:8000/api/lists/${props.userId}/${props.listId}`, { itemsSaved: updatedListingIds })
    .then(response => console.log(response))
    .catch(err => console.log('error', err))
  }


  useEffect(() => {
    getSavedItems(props.itemsSaved)
  }, [props.itemsSaved])


  if (data === {}) { return <div>Loading</div> }
  return (
    <div id='list-saved-items' className='element'>
      <h3>Saved items</h3>
      <ul>
        {Array.from(data).map((elem, i) => {
          return (
            <li key={i}>
              <span onClick={() => deleteSavedItem(elem.listingId)}>{trashIcon}</span> 
              <a href={`https://www.etsy.com/listing/${elem.listingId.split('-')[1]}`} target='_blank' rel='noopener noreferrer'>{elem.productName}</a>
              </li>
          )
        })}
      </ul>
    </div>
  )

}

export default ListSavedItems


