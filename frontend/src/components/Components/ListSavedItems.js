import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ListSavedItems = (props) => {
  // console.log('saved', props)
  //===== ICONOGRAPHY =====
  const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />

  //===== VARIABLES =====
  let [data, setData] = useState([])


  //===== FUNCTIONS FOR THIS PAGE =====
  function getSavedItems(items) {
    let itemDetail = [] //holds item data for each item

    if (props.itemsSaved) {
      items.map((elem, i) => {
        axios.get(`/api/items/${elem}`)
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
    axios.put(`/api/lists/${props.userId}/${props.listId}`, { itemsSaved: updatedListingIds })
      .then(response => console.log(response))
      .catch(err => console.log('error', err))
  }


  useEffect(() => {
    getSavedItems(props.itemsSaved)
  }, [props.itemsSaved])
  console.log(data)

  if (data === []) { return <div>Loading</div> }
  return (
    <div id='list-saved-items' className='element'>
      <h3>Saved items</h3>
      <ul>
        {data.map((elem, i) => {
          return (
            <div className='saved-item' key={i}>
              <span className='interactive-icon clickable' onClick={() => deleteSavedItem(elem.listingId)}>{trashIcon}</span>
              <div>
                <img className='saved-item' src={elem.imgsrc}></img>
                <div className='saved-item-detail'>
                  <a href={`https://www.etsy.com/listing/${elem.listingId.split('-')[1]}`} target='_blank' rel='noopener noreferrer' className='truncate'>{elem.productName}</a>
                  <p>{elem.currencyCode}: {elem.price}</p>
                </div>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )

}

export default ListSavedItems


