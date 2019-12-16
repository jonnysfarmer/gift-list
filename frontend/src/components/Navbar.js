import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Auth from '../lib/auth'
import Logo from './Components/Logo'

const Navbar = (props) => {
  let history = useHistory()
  // console.log(this.props.location.pathname)
  // //set breadcrumb route(s)
  // // const breadcrumbs = () => {
  // //   const urlPath = props.location.pathname
  // //   console.log(urlPath)
  // // }

  const [state, setState] = useState({
    isOpen: false
  })

  const handleLogout = () => {
    Auth.logout()
    history.push('/')
  }

  const toggleNavbar = () => {
    setState({ isOpen: !state.isOpen })
  }

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/"
          onClick={() => setState({ isOpen: false })}
        >
          <Logo /> 
          <em className='logo-text'>GiftList</em>
          </Link>
        <a
          role="button"
          className={`navbar-burger burger ${state.isOpen ? 'is-active' : ''}`}
          onClick={() => toggleNavbar()}
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${state.isOpen ? 'is-active' : ''} ${history.location.pathname === '/' ? 'navbar-is-transparent' : 'navbar-is-off-white'}`}>
        <div className="navbar-end">
          {/* <div className="navbar-item">
            <Link className="navbar-item" to="/browse"
              onClick={() => toggleNavbar()}
            >
              Browse
              </Link>
          </div> */}
          {Auth.isAuthorized() && <div className="navbar-item">
            <Link className="navbar-item" to="/lists/create"
              onClick={() => toggleNavbar()}
            >
              Create new list112
              </Link>
          </div>}
          {!Auth.isAuthorized() && <div className="navbar-item">
            <Link className="navbar-item" to="/register"
              onClick={() => toggleNavbar()}
            >
              Register
              </Link>
          </div>}
          {!Auth.isAuthorized() && <div className="navbar-item">
            <Link className="navbar-item" to="/login"
              onClick={() => toggleNavbar()}
            >
              Login
            </Link>
          </div>}
          {Auth.isAuthorized() && <div className="navbar-item">
            <Link className="navbar-item" to={`/lists/${Auth.getUserId()}`}
              onClick={() => toggleNavbar()}
            >
              My Lists
            </Link>
          </div>}
          {Auth.isAuthorized() && <div className="navbar-item">
            <Link className="navbar-item" onClick={() => handleLogout()}>
              Logout
              </Link>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar