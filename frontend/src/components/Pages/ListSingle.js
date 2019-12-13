import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import ListName from '../Components/ListName'
import ListEvent from '../Components/ListEvent'
import ListSavedItems from '../Components/ListSavedItems'
import ListCustomItems from '../Components/ListCustomItems'
import Breadcrumbs from '../Breadcrumbs'
import ProductShow from '../Components/ProductShow'

const ListSingle = (props) => {

  //===== VARIABLES =====
  const [data, setData] = useState({})

  //get the userId from token
  const userId = Auth.getUserId()
  //get the userId from URL (useful for future feature where we show a limited version of this page if not logged in)
  // const userUrlId = props.match.params.userId
  //get the listId from URL
  const listId = props.match.params.listId


  const onMount = () => {
    console.log('456')
    axios.get(`http://localhost:8000/api/lists/${userId}/${listId}`)
      .then(response => {
        setData(response.data)
        console.log('123')
      })
  }




  useEffect(onMount, [])

  //currently using the data.subcategory && for that component as without it it seems to load before the subcategory exists to pass
  //not sure why, needs investigation

  return (

    <div className='page'>

      <Breadcrumbs />
      <section className='section columns'>

        <div className='column '>
          <div className='container'>
            <ListName
              listName={data.listName} giftRecipient={data.giftRecipient}
              userId={userId} listId={listId}
            />
            <ListEvent
              eventName={data.eventName} eventDate={data.eventDate} eventReminder={data.eventReminder}
              userId={userId} listId={listId}
            />
          </div>
          {data.subcategory && <div>
            <ProductShow
              subcategory={data.subcategory} itemsSaved={data.itemsSaved}
              userId={userId} listId={listId}
              refreshFunction={onMount}
            />
          </div>}
        </div>

        <div className='column '>
          <div className='container'>
            <ListSavedItems
              itemsSaved={data.itemsSaved}
              userId={userId} listId={listId}

            />
          </div>
          <div className='container'>
            <ListCustomItems
              customItem={data.customItem}
              userId={userId} listId={listId}
            />
          </div>
        </div>

      </section>

    </div>


  )

}

export default ListSingle
