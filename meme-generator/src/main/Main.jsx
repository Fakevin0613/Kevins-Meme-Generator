import React from 'react'
import { Grid, TextField, Button,Typography } from '@mui/material'
import mainStyle from './Style'

const Main = () => {
  const classes = mainStyle();

  return (
    <div className={classes.entirePage}>
      <div className={classes.grid}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={12}>
            <Typography variant="h4" color="initial" className={classes.title}>Try to make your own meme!</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              className={classes.top}
              helperText="Text Limit"
              label="Top Text"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              className={classes.bottom}
              helperText="Text Limit"
              label="Bottom Text"

            />
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth variant="outlined" className={classes.clear}>Clear</Button>
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth variant="contained" className={classes.generate}>Generate</Button>
          </Grid>

        </Grid>
      </div>
    </div>

  )
}

export default Main