import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma/css/bulma.css'
import './styles/main.scss'

// import SecureRoute from './components/secureRoute'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Browse from './components/Browse'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import SingleList from './components/SingleList'
import auth from './lib/auth'
import CreateList from './components/CreateList'

function App() {
 
  //the aside of suggested lists is hardcoded here for now as it was an additional feature we thought of that was simple to implement in this manner
  //we want to extract this out to the backend so that here we just make an API call to get the latest 9 suggestions

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path='/list/create' component={CreateList} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard/:userId' component={Dashboard} />
          <Route path='/lists/:userId/:listId' component={SingleList} />
        </Switch>
      </BrowserRouter>


    </div>
  )
}

export default App;
