import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to="/sign-up">Sign up</NavLink></li>
      <li><NavLink to="/sign-in">login</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks