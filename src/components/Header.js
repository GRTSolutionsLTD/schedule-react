import React from 'react'
import Navigation from './Navigation'
import logo from '../images/logo.svg'
import logo2 from '../images/logo2.svg' 

const Header = props =>
  <div className="c-header">
    <img src={logo2} className="c-header__logo" alt="create-react-redux-app-logo" />
    <h2>Create React Redux App</h2>
    <p>
      <a href="https://github.com/yingray/create-react-redux-app">
        https://github.com/yingray/create-react-redux-app
      </a>
    </p>
    <Navigation />
  </div>

export default Header
