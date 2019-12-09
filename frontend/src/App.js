import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma/css/bulma.css'
import './styles/main.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Browse from './components/Browse'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/browse" component={Browse} />
    </Switch>
    </BrowserRouter>
  )
}

export default App;
