import React from 'react'
import { Link } from 'react-router'

const Navigation = ({ className, buttonClassName }) =>
  <nav className={className}>
    <Link className={buttonClassName} to="/">
      Home
    </Link>
    <Link className={buttonClassName} to="todo">
      Todo
    </Link>
    <Link className={buttonClassName} to="weather">
      Weather
    </Link>
    <Link className={buttonClassName} to="PresenceReport">
    Presence Report
    </Link>
    <Link className={buttonClassName} to="presence">
    Presence
    </Link>
    <Link className={buttonClassName} to="logIn">
    LogIn
    </Link>
  </nav>

Navigation.defaultProps = {
  className: '',
  buttonClassName: 'c-button'
}

export default Navigation
