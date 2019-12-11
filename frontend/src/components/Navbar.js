import React, { useState } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import Auth from '../lib/auth'

=======
import { Link, useHistory } from 'react-router-dom'
import Auth from '../lib/auth'
>>>>>>> 296bfdcdc4db82055c2b696b16d9a89251ca89ff

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
<<<<<<< HEAD
    props.history.push('/')
=======
    history.push('/')
>>>>>>> 296bfdcdc4db82055c2b696b16d9a89251ca89ff
  }

  const toggleNavbar = () => {
    setState({ isOpen: !state.isOpen })
  }

  return <div className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/"
          onClick={() => setState({ isOpen: false })}
        >
          Gift List
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
      <div className={`navbar-menu ${state.isOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
          {/* <div className="navbar-item">
            <Link className="navbar-item" to="/browse"
              onClick={() => toggleNavbar()}
            >
              Browse
              </Link>
          </div> */}
          <div className="navbar-item">
            <Link className="navbar-item" to="/lists/create"
              onClick={() => toggleNavbar()}
            >
              Create new list
              </Link>
          </div>
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
<<<<<<< HEAD
          </div>
=======
          </div>}
          {Auth.isAuthorized() && <div className="navbar-item">
            <Link className="navbar-item" to={`/lists/${Auth.getUserId()}`}
              onClick={() => toggleNavbar()}
            >
              My Lists
            </Link>
          </div>}
>>>>>>> 296bfdcdc4db82055c2b696b16d9a89251ca89ff
          {Auth.isAuthorized() && <div className="navbar-item">
              <div className="navbar-item" onClick={() => handleLogout()}>
                Logout
              </div>
            </div>}
        </div>
      </div>
    </div>
  </div>
}

export default Navbar