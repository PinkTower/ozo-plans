import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import styles from './Nav.styles'

const menuItems = [
  { label: 'Login', route: '/login' },
  { label: 'Register', route: '/register' },
]

export const Nav = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          <Link to="/" className={classes.titleLink}>
            OZO Plans
          </Link>
        </Typography>
        {menuItems.map(item => (
          <Button
            key={item.route}
            color="inherit"
            component={Link}
            to={item.route}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  </div>
)

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Nav)
