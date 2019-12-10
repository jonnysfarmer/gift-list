import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import Auth from


const Navbar = (props) => {

  // console.log(this.props.location.pathname)
  // //set breadcrumb route(s)
  // // const breadcrumbs = () => {
  // //   const urlPath = props.location.pathname
  // //   console.log(urlPath)
  // // }

  const [state, setState] = useState({
    isOpen: false
  })

  // const handleLogout = () => {
  //   Auth.logout()
  //   props.history.push('/')
  // }

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
          <div className="navbar-item">
            <Link className="navbar-item" to="/browse"
              onClick={() => toggleNavbar()}
            >
              Browse
              </Link>
          </div>
          <div className="navbar-item">
            <Link className="navbar-item" to="/lists/create"
              onClick={() => toggleNavbar()}
            >
              Create new list
              </Link>
          </div>
          <div className="navbar-item">
            <Link className="navbar-item" to="/register"
              onClick={() => toggleNavbar()}
            >
              Register
              </Link>
          </div>
          <div className="navbar-item">
            <Link className="navbar-item" to="/login"
              onClick={() => toggleNavbar()}
            >
              Login
            </Link>
          </div>
          {/* {Auth.isAuthorized() && <div className="navbar-item">
              <div className="navbar-item" onClick={() => handleLogout()}>
                Logout
              </div>
            </div>} */}
        </div>
      </div>
    </div>
  </div>
}

export default Navbar