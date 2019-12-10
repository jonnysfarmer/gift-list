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
  const [savedItems, setSavedItems] = useState([])
  const [customItems, setCustomItems] = useState([])
  
  const listHook = () => {
    const userID = props.match.params.userId
    const listID = props.match.params.listId
    axios.get(`http://localhost:8000/api/lists/${userID}/${listID}`)
    .then(response => {
      setData(response.data)
      setCat(response.data.subcategory)
      etsyHook(response.data.subcategory[0])
      savedItemsHook(response.data.itemsSaved)
    })

    .catch(err => setErrors(err))
  }

  //This displays 10 of the first category
  //when the other categories are clicked, it then does those
  const etsyHook = (cat) => {
    axios.get(`http://localhost:8000/api/etsy/${cat}`)
      .then(response => {
        setEtsy(response.data.data)
      })
      .catch(err => setErrors(err))
  }

  const savedItemsHook = (items)=>{
    let totalItems = []
    items.forEach((ele, i) => {
      axios.get(`http://localhost:8000/api/items/${ele}`)
      .then(response => {
        let newArray = totalItems.push(response.data)
        console.log(totalItems)
        setSavedItems(totalItems)
      })
    })
  }

  const customItemHook = ()=>{
    const userID = props.match.params.userId
    const listID = props.match.params.listId
    axios.get(`http://localhost:8000/api/lists/${userID}/${listID}/customItems`)
    .then(response => setCustomItems(response.data))
    .catch(err => setErrors(err))
  }

  // show 5 
  // we want to spin off the cat into a different component.
  //call the picture as well.
  console.log(savedItems)
  useEffect(listHook, [])
  useEffect(customItemHook, [])

  if (data === {} || etsy === {} || savedItems === []) return <div>Loading</div>
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
              {cat.map((ele, i) => {
                return (
                  <button key={i} onClick={()=>etsyHook(ele)}>{ele}</button>
                )
              })}
            </div>
            <div className="container">
              <div className="subtitle">Gift suggestions</div>
              {etsy.map((ele, i)=>{
                return (
                  <p key={i}>{ele.title}</p>
                )
              })}
            </div>
          </div>
          <div className="column">
            <div className="container">
              <div className="subtitle">Saved gifts</div>
              {savedItems.map((ele, i)=>{
                return (
                  <p key={i}>{ele.productName}</p>
                )
              })}
            </div>
            <div className="container">
            <div className="subtitle">Cutstom Gifts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleList