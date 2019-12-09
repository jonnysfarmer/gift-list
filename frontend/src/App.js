import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma/css/bulma.css'
import './styles/main.scss'

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
  )
}

export default App;
