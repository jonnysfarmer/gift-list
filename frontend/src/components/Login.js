import React from 'react'
import axios from 'axios'
import Auth from '../lib/auth'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      data: {
        email: '',
        password: ''
      },
      errors: {}
    }
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:8000/api/login', this.state.data)
      .then(resp => {
        Auth.setToken(resp.data.token)
        console.log(resp)
        this.props.history.push(`/dashboard/${resp.data.id}`) 
      })
      .catch(() => this.setState({ errors: 'Incorrect username/password combination' }))
  }

  render() {
    return (
      <div className='section'>
        <div className='container'>
          <div className='title'>Login</div>
          <form className='form' onSubmit={(e) => this.handleSubmit(e)}>
            
            <div className='field'>
              <label htmlFor='email' className='label'>
                Email
              </label>
              <div className='control'>
                <input
                  onChange={(e) => this.handleChange(e)}
                  className='input'
                  type='email'
                  name='email'
                />
              </div>
            </div>

            <div className='field'>
              <label htmlFor='password' className='label'>
                Password
              </label>
              <div className='control'>
                <input
                  onChange={(e) => this.handleChange(e)}
                  className='input'
                  type='password'
                  name='password'
                />
              </div>
            </div>
            
            <button className='button is-success'>
              Login
            </button>
            {this.state.errors.email && <small className='help is-danger'>
              {this.state.errors.email}
            </small>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login