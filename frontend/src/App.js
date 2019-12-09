import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Auth from './lib/auth'

import 'bulma/css/bulma.css'
import './styles/main.scss'



function App() {

  const [userInfo, setUserInfo] = useState({})
  const [listInfo, setListInfo] = useState([])
  const [errors, setErrors] = useState([])
  
  //temp for devlopment, this needs to be passed via URL
  const userID = '5dee2efa789b9a57f9799cff'

  //this hook gets the user Info
  const userlistHook = () => {
    //we need userID = props.params.match.id
    axios.get(`http://localhost:8000/api/lists/${userID}`)
    .then(response => {
      setListInfo(response.data)
    })
    .catch(err => setErrors(err))
  }
  const userInfoHook = () => {
    //we need userID = props.params.match.id
    axios.get(`http://localhost:8000/api/user/${userID}`)
    .then(response => {
      setUserInfo(response.data)
    })
    .catch(err => setErrors(err))
  }





  useEffect(userlistHook, [])
  useEffect(userInfoHook, [])
  // console.log(listInfo[0].user.firstname)

  console.log(listInfo)
  console.log(userInfo)
  if(listInfo === [] || userInfo === {} ) return <div>Loading</div>
  return (
    <section className="section">
      <section className="section">
        <div className="container">
        <div className='title'>Welcome back, {userInfo.firstname}</div>
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
