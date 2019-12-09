import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Auth from './lib/auth'

import 'bulma/css/bulma.css'
import './styles/main.scss'

function App() {

  //Need to find out what user is viewing - via local token
  //get the user ID from the local token
  //API call for user Info
  // List data from Local user.

  return (
    <section className="section">
      <section className="section">
        <div className="container">
        Basic Info
        </div>
      </section>
      <section className="section">
        <div className="container">
          List of stuff
        </div>
      </section>
    </section>
  )
}

export default App;
