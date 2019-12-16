import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
// import getSymbol from '../../lib/currencyCodes'
import ListSinge from '../Pages/ListSingle'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faCircle } from '@fortawesome/free-solid-svg-icons'
import ListSingle from '../Pages/ListSingle'
import Loader from '../Loader'



const ProductShow = (props) => {
  //===== ICONOGRAPHY =====
  const addIcon = <FontAwesomeIcon icon={faPlusSquare} />
  const backgroundIcon = <FontAwesomeIcon icon={faCircle} />

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

  // console.log(props)

  //===== FUNCTIONS FOR THIS PAGE =====
  //This displays 6 of the first category
  //when the other categories are clicked, it then does those
  function etsyHook(cat) {
    axios.get(`/api/etsy/${cat}`)
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
    // console.log(ListingID)
    let newArr = []
    ListingID.forEach((ele, i) => {
      axios.get(`/api/image/${ele}`)
        .then(response => {
          newArr = [...newArr]
          //the [i] prevents any async 
          newArr[i] = response.data.image
          setEtsyListingID(newArr)
        })
    })
  }



  const addItem = (e, ele, store, imgurl) => {
    const data = {
      src : store,
      id : store + '-' + ele.listing_id,
      user_id : props.userId,
      list_id : props.listId,
      imgsrc: imgurl,
      productName: ele.title,
      listingId: store + '-' + ele.listing_id,
      price: ele.price,
      currencyCode: ele.currency_code
      

    }  
    setEtsyListingID('')
    e.preventDefault()
    console.log('working')
    axios.post(`/api/items/`, data )
      .then(()=>{
        props.refreshFunction()
        console.log('completed')

        etsyHook(cat[0])
      })
      .catch((err) => {
        console.log('error')
        setErrors(err.response)
      })
  }


  useEffect(() => {
    setDataFromProps(props)
    etsyHook(props.subcategory[0][0].value)
    setCat(props.subcategory[0])
  }, [props])

// console.log(cat)

  if (data === {} || (etsyListingID.length !== etsy.length) ) { return <div className='has-text-centered'><div className='loader-margin'><Loader  /></div></div>}
  return (
    <div id='list-products' className='element'>
      <div className='container'>
        <h3>Your categories</h3>
        <ul className='filter-option'>
          {cat.map((ele, i) => {
            return (
              <li className='clickable truncate' key={i} onClick={() => etsyHook(ele.value)}>{ele.name}</li>
            )
          })}
        </ul>
      </div>

      <div className='container'>
        <h3>Suggested gifts</h3>
        <div className='columns is-multiline suggested-gifts'>
          {etsy.map((ele, i) => {
            return (
              <div className='column is-one-third' key={i}>
                <div className="card">
                  <span className='interactive-icon clickable' onClick={((e) => addItem(e, ele, 'etsy', etsyListingID[i]))}>{addIcon}</span>
                  <span className='background-icon interactive-icon'>{backgroundIcon}</span>
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={etsyListingID[i]} alt="product" />
                    </figure>
                    <div className="card-content">
                    <span className='truncate-card'>{ele.title}</span>
                    
                    <footer className="card-footer">
                    <br></br>
                      {ele.currency_code}  {ele.price}
                      </footer>
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