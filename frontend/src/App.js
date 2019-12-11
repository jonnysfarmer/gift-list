import React  from 'react'
// import axios from 'axios'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma/css/bulma.css'
import './styles/main.scss'

// import SecureRoute from './components/secureRoute'
import Navbar from './components/Navbar'
import Home from './components/Home'
// import Browse from './components/Browse'
import Register from './components/Register'
import Login from './components/Login'
import Lists from './components/Lists'
import SingleList from './components/SingleList'
// import auth from './lib/auth'
import CreateList from './components/CreateList'
import SecureRoute from './lib/SecureRoute'

function App() {

  

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/lists/create' component={CreateList} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <SecureRoute exact path='/lists/:userId' component={Lists} />
          <SecureRoute exact path='/lists/:userId/:listId' component={SingleList} />
        </Switch>
      </BrowserRouter>


    </div>
  )
}

export default App;
