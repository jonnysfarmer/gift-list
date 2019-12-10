import React, { useState, useEffect } from 'react'
import useAxios from './UseAxios'

import EtsyProduct from './EtsyProduct'
import axios from 'axios'

require('dotenv').config()
const etsyKey = process.env.ETSY_KEY

const Browse = () => {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   axios.get(`https://openapi.etsy.com/v2/listings/trending?api_key=${etsyKey}`)
  //     .then(resp => setData(resp))
      
  // }, [])
  const data = useAxios(`https://openapi.etsy.com/v2/listings/trending?api_key=${etsyKey}`, [])
  return (
    <div className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {console.log(data)}
          {/* {data.map((listing, id) => {
            <EtsyProduct key={id} listing={listing} />
          })} */}
        </div>
      </div>
    </div>
  )
}

export default Browse