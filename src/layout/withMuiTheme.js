import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0747a6',
    },
  },
})

const withMuiTheme = Component => {
  const HOC = componentProps => (
    <MuiThemeProvider theme={theme}>
      <Component {...componentProps} />
    </MuiThemeProvider>
  )

  const name = Component.displayName || Component.name || ''
  HOC.displayName = `withMuiTheme(${name})`

  return HOC
}

export default withMuiTheme
