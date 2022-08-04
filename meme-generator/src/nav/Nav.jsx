import React from 'react'
import { AppBar, Avatar, Typography, Toolbar } from '@mui/material'
import doge from './doge.jpeg'
import navStyle from './Style'

const Nav = () => {
  const classes = navStyle()
  return (
    <AppBar className={classes.Nav}>
      <Toolbar>
        <Avatar alt="Kevin's little Brother" src={doge} className={classes.Ava} />
        <Typography color="inherit" component="div" variant="h5" className={classes.Typo}>Kevin's Meme Generator</Typography>
      </Toolbar>
    </AppBar>

  )
}

export default Nav