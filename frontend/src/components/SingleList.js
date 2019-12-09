import React, {useEffect, useState } from 'react'
import axios from 'axios'
// import { useHistory } from "react-router-dom"

require('dotenv').config()
const etsyKey = '0b6tytx6ibc1jzi7gd790l0a'


// require('dotenv').config()




const SingleList = ( props ) => {


  
  const [data, setData] = useState({})
  const [errors, setErrors] = useState([])
  const [cat, setCat] = useState([])
  const [etsy, setEtsy] = useState([])

  const listHook = () => {
    const userID = props.match.params.userId
    const listID = props.match.params.listId
    axios.get(`http://localhost:8000/api/lists/${userID}/${listID}`)
    .then(response => {
      setData(response.data)
      setCat(response.data.subcategory)
      etsyHook(response.data.subcategory[0])
    })

    .catch(err => setErrors(err))
  }

  const etsyHook = (cat) => {
    axios.get(`http://openapi.etsy.com/v2/listings/active/?region=GB&category=${cat}&limit=10&api_key=${etsyKey}`)
    // axios.get('https://api.coingecko.com/api/v3/coins/list')
      .then(response => {
        setEtsy(response.data)
      })
      .catch(err => setErrors(err))
  }

  // show 5 

  console.log(etsy)
  console.log(cat)
  useEffect(listHook, [])

  if (data === {} || etsy === {}) return <div>Loading</div>
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="container">
              <div className="title">{data.listName}</div>
              <div className="subtitle">{data.giftRecipient}</div>
              <div className="subtitle">{data.eventDate}</div>
              <div className="subtitle">{data.eventName}</div>
            </div>
            <div className="container">
              {etsy.map((ele, i)=>{
                return (
                  <p>{ele.title}</p>
                )
              })}
            </div>
          </div>
          <div className="column">
            Column 2
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleList