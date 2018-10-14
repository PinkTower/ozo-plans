import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from '~layout/Routes'
import withMuiTheme from '~layout/withMuiTheme'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )
  }
}

export default withMuiTheme(App)
