import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import HomePage from '~pages/Home'
import LoginPage from '~pages/Login'
import RegisterPage from '~pages/Register'
import PlanPage from '~pages/Plan'

import Nav from './Nav'

class Routes extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route component={LoginPage} exact path="/login" />
          <Route component={RegisterPage} exact path="/register" />
          <Route component={HomePage} exact path="/home" />
          <Route component={PlanPage} exact path="/" />
          <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}

export default Routes
