import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



const ProductShow = (props) => {
console.log(props)
  console.log(props.subcategory[0])
  //===== ICONOGRAPHY =====
  // const trashIcon = <FontAwesomeIcon icon={faTrashAlt} />

  //===== VARIABLES =====
  const [data, setData] = useState({})
  const [errors, setErrors] = useState([])
  const [etsyListingID, setEtsyListingID] = useState([])
  const [cat, setCat] = useState([])
  const [etsy, setEtsy] = useState([])

  //===== FUNCTIONS FOR THIS PAGE =====
  //This displays 6 of the first category
  //when the other categories are clicked, it then does those
  function etsyHook(cat) {
    console.log(cat)
    axios.get(`http://localhost:8000/api/etsy/${cat}`)
      .then(response => {
        setEtsy(response.data.data)
        getListingIds(response.data.data)
        console.log(response.data.data)
      })
      .catch(err => setErrors(err))
  }

  const getListingIds = (data) => {
    const ListingID = data.map((ele, i) => {
      return ele.listing_id
    })
    console.log(ListingID)
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

  useEffect(() => {
    etsyHook(props.subcategory[0])
  }, [props.subcategory[0]])

  if (data === {}) { return <div>Loading</div> }
  return (
    <>
      <div className='container'>
        {cat.map((ele, i) => {
          return (
            <button key={i} onClick={() => etsyHook(ele)}>{ele}</button>
          )
        })}
      </div>

      <div className='container'>
        <div className='subtitle'>Suggested Gifts</div>
        {etsy.map((ele, i) => {
          return (
            <div key={i}>
              <img src={etsyListingID[i]} alt="product" />
              <p>{ele.title}</p>
            </div>
          )
        })}
      </div>
    </>
  )

}

export default ProductShow