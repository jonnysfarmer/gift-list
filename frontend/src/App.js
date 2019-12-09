<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Auth from './lib/auth'
=======
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
>>>>>>> development

import 'bulma/css/bulma.css'
import './styles/main.scss'

<<<<<<< HEAD


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
=======
import Register from './components/Register'
import Login from './components/Login'
// import Auth from './lib/auth'
// import SecureRoute from './components/secureRoute'

function App() {
  //the aside of suggested lists is hardcoded here for now as it was an additional feature we thought of that was simple to implement in this manner
  //we want to extract this out to the backend so that here we just make an API call to get the latest 9 suggestions

  return (
    <div className="App">

      <BrowserRouter>
        {/* <Nav /> */}

        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          {/* <Route exact path='/list/create' component={CreateList} /> */}
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>



    </div>
>>>>>>> development
  )
}

export default App;
