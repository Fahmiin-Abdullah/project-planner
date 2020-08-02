import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = { firstName: '', lastName: '', email: '', password: '' }

  handleSubmit = e => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    const { auth, authError } = this.props

    if (auth.uid) return <Redirect to="/"/>

    return (
      <div className="container">
        <form className="white" onSubmit={ this.handleSubmit }>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" onChange={ this.handleChange }/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" onChange={ this.handleChange }/>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={ this.handleChange }/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={ this.handleChange }/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign up</button>
            <div className="red-text center">
              { authError ? <p>{ authError }</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { auth: state.firebase.auth, authError: state.auth.authError }
}

const mapDispathToProps = dispatch => {
  return { signUp: newUser => dispatch(signUp(newUser)) }
}

export default connect(mapStateToProps, mapDispathToProps)(SignUp)