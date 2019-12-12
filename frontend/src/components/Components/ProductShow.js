import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
// import getSymbol from '../../lib/currencyCodes'
import ListSinge from '../Pages/ListSingle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import ListSingle from '../Pages/ListSingle'



const ProductShow = (props) => {
  //===== ICONOGRAPHY =====
  const addIcon = <FontAwesomeIcon icon={faPlusSquare} />

  //===== VARIABLES =====
  const [data, setData] = useState({})
  const [errors, setErrors] = useState([])
  const [etsyListingID, setEtsyListingID] = useState([])
  const [cat, setCat] = useState([])
  const [etsy, setEtsy] = useState([])

  //initiate our data from our props
  const setDataFromProps = () => {
    setData(props)
  }

  //===== FUNCTIONS FOR THIS PAGE =====
  //This displays 6 of the first category
  //when the other categories are clicked, it then does those
  function etsyHook(cat) {
    axios.get(`http://localhost:8000/api/etsy/${cat}`)
      .then(response => {
        setEtsy(response.data.data)
        getListingIds(response.data.data)
      })
      .catch(err => setErrors(err))
  }

  const getListingIds = (data) => {
    const ListingID = data.map((ele, i) => {
      return ele.listing_id
    })
    let newArr = []
    ListingID.map((ele, i) => {
      axios.get(`http://localhost:8000/api/image/${ele}`)
        .then(response => {
          newArr = [...newArr]
          newArr.push(response.data.image)
          setEtsyListingID(newArr)
        })
    })
  }

  const addItem = (e, listingId, store) => {
    const data = {
      src : store,
      id : listingId,
      user_id : props.userId,
      list_id : props.listId
    }  
    e.preventDefault()
    axios.post(`http://localhost:8000/api/items/`, data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(etsyHook(cat))
      .catch((err) => {
        setErrors(err.response.data.errors)
      })
  }


  useEffect(() => {
    setDataFromProps(props)
    etsyHook(props.subcategory[0])
    setCat(props.subcategory)
  }, [props])


  if (data === {}) { return <div>Loading</div> }
  return (
    <div id='list-products' className='element'>
      <div className='container'>
        <h3>Your categories</h3>
        <ul>
          {cat.map((ele, i) => {
            return (
              <li className='clickable truncate' key={i} onClick={() => etsyHook(ele)}>{ele}</li>
            )
          })}
        </ul>
      </div>

      <div className='container'>
        <h2>Suggested gifts</h2>
        <div className='columns is-multiline'>
          {etsy.map((ele, i) => {
            return (
              <div className='column' key={i}>
                <div className="card">
                  <span onClick={((e) => addItem(e, ele.listing_id, 'etsy'))}>{addIcon}</span>
                  <div className="card-image">
                    <figure className="image">
                      <img src={etsyListingID[i]} alt="product" />
                    </figure>
                    <span>{ele.title}</span>
                    <div className="card-content">
                      <p>{ele.currency_code}{ele.price}</p>
                      </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )

}

export default ProductShow