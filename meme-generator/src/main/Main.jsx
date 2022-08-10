import React from 'react'
import { Grid, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import mainStyle from './Style'
import getFont from '../api/getFont'
import getMeme from '../api/getMeme'
import { useState, useEffect } from 'react'


const Main = () => {
  const classes = mainStyle();
  const [fontList, getfontList] = useState(null)
  // const [memeName, getMemeName] = useState(null)
  const [memefont, changefont] = useState("")
  const [meme, setmeme] = useState("")

  const [topMessage, setTop] = useState("")
  const [bottomMessage, setBottom] = useState("")
  const [fontSize, setFontSize] = useState("")


  useEffect(() => {
    getFont().then((data) => {getfontList(data)}) 
  }, [])

  const generateMeme = () => {
    const memename = 'Condescending-Wonka'
    console.log(topMessage)
    getMeme(topMessage, bottomMessage, memename, fontSize, memefont).then(image => 
      setmeme(image)
    )
  }

  return (
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
            onChange={(newValue) => setTop(newValue.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            className={classes.bottom}
            helperText="Text Limit"
            label="Bottom Text"
            onChange={(newValue) => setBottom(newValue.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            className={classes.fontsize}
            helperText="Suggest range is 30 to 100"
            label="Font Size"
            type="number"
            defaultValue="50"
            onChange={(newValue) => setFontSize(newValue.target.value)}
          />
        </Grid>

        {
          fontList? <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Word Font</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Word Font"
              className={classes.wordfont}
              value={memefont}
              onChange={(font) => {changefont(font.target.value)}}
            >
              {
                fontList.map((font) => (
                  <MenuItem key={font} value={font}>{font}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>
        : 
        null
        }
        

        <Grid item xs={6}>
          <Button fullWidth variant="outlined" className={classes.clear}>Clear</Button>
        </Grid>

        <Grid item xs={6}>
          <Button fullWidth variant="outlined" className={classes.generate} onClick={() => generateMeme()}>Generate</Button>
        </Grid>

        <Grid item xs={12}>
          <Button fullWidth variant="contained" className={classes.export}>Export</Button>
        </Grid>

        <Grid item xs={12}>
          <img alt={"meme"} src={meme} width="300px" height="300px"></img>
        </Grid>

      </Grid>
    </div>
  )
}

export default Main