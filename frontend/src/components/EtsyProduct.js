import React from 'react'
import { Link } from 'react-router-dom'

const EtsyProduct = ({ listing }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    {/* <Link to={`/browse/${._id}`}> */}
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            {/* <img src={etsy.url???} alt="Placeholder image" /> */}
          </figure>
        </div>
        <div className="card-content">
          <p className="subtitle">{listing.title}</p>
        </div>
      </div>
    {/* </Link > */}
  </div>
)

export default EtsyProduct