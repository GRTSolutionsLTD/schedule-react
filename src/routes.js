import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Weather from './pages/Weather'
import PresenceReport from './components/PresenceReport'
import Presence from './pages/Presence'
import LogIn from './pages/LogIn'




const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="PresenceReport" component={PresenceReport} />
    <Route path="home" component={Home} />
    <Route path="todo" component={Todo} />
    <Route path="weather" component={Weather} />
    <Route path="presence" component={Presence} />
    <Route path="logIn" component={LogIn} />
  </Route>
)

export default routes
