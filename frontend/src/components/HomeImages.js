import React, { useState, useEffect } from 'react'
import axios from 'axios'

//Random Category selection
const catArray = ['Accessories', 'Art', 'Glass', 'Jewelry', 'Candles', 'Furniture']


const HomeImages = () => {
  const [data, setData] = useState([])
  const [etsyImage, setEtsyImage] = useState([])
  const [randomCatName, setRandomCatName] = useState('')
  const randomNum = Math.floor((Math.random() * 6))
  const randomCat = catArray[randomNum]

  //this brings up a random category.  Did a lot of .then due to async issues
  const trandingHook = () => {
    let dataArray = []
    let ListingID = []
    //selects a random category to show on the come page
    setRandomCatName(randomCat)
    axios.get(`/api/etsy/${randomCat}`)
    .then(response => {
      dataArray = [response.data.data[0], response.data.data[1], response.data.data[2], response.data.data[3]]
      // console.log(dataArray)
      setData(dataArray)
      // getListingIds(dataArray)
    })
    .then(()=> {
        ListingID = dataArray.map((ele, i) => {
        return ele.listing_id
      })
    })
    .then(()=> {
      // console.log(ListingID)
      getListingIds(ListingID)
    })
  }

  const getListingIds = (data)=> {
    // console.log(data)
    let newArr = []
    data.forEach((ele, i)=> {
      axios.get(`/api/image/${ele}`)
      .then(response => {
        // console.log(newArr)
        newArr = [...newArr]
        newArr[i] = response.data.image
        setEtsyImage(newArr)
      })
      .catch(err => console.log(err))

    })
  }
 
  useEffect(trandingHook, [])
  console.log(data)
  // console.log(etsyImage)
  if (data === []) return <div>Loading</div>
  return (
    <section className='section'>
      <div className='container'>
        <div className='title has-text-centered'>Currently trending in {randomCatName}</div>
        <div className='columns'>
        {data.map((ele, i)=> {
          return (
            <div key={i} className="column column-home">
          <div className="card-home">
            <div className="card-image">
              <figure className="image is-3by2">
                <img src={etsyImage[i]} alt="Product" />
              </figure>
            </div>
            <div className="card-content">
              <p>{ele.title.substring(0,40)}...</p>
            </div>
          </div>
        </div>
          )
        })}


        </div>
      </div>
    </section>
  )
}

export default HomeImages

