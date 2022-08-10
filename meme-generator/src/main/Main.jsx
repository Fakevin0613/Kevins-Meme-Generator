import React from 'react'
import { Grid, TextField, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import mainStyle from './Style'
import getFont from '../api/getFont'
import getMeme from '../api/getMeme'
import getMemeName from '../api/getMemeName'
import { useState, useEffect } from 'react'


const Main = () => {
  const classes = mainStyle();
  const [fontList, getfontList] = useState(null)
  const [memeList, getMemeList] = useState(null)
  const [memeFont, changeFont] = useState("")
  const [memeName, changeName] = useState("")
  const [topMessage, setTop] = useState("")
  const [bottomMessage, setBottom] = useState("")
  const [fontSizeValue, setfontSizeValue] = useState("50")
  const [meme, setmeme] = useState("")


  useEffect(() => {
    getFont().then((data) => { getfontList(data); changeFont(data[3]) })
    getMemeName().then((data) => { getMemeList(data) })
  }, [])

  const generateMeme = () => {
    if (memeName === "") {
      alert("Please select a meme!")
    }
    else {
      getMeme(topMessage, bottomMessage, memeName, fontSizeValue, memeFont).then(image =>
        setmeme(image)
      )
    }
  }

  const clearEveryThing = () => {
    setTop("")
    setBottom("")
    setfontSizeValue("50")
    setmeme("")
    changeFont(fontList[3])
    changeName("")
  }

  return (
    <div className={classes.grid}>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="h4" color="initial" className={classes.title}>Try to make your own meme!</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            className={classes.top}
            label="Top Text"
            value={topMessage}
            onChange={(newValue) => setTop(newValue.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            className={classes.bottom}
            label="Bottom Text"
            value={bottomMessage}
            onChange={(newValue) => setBottom(newValue.target.value)}
          />
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            className={classes.fontSizeValue}
            label="Font Size"
            type="number"
            value={fontSizeValue}
            onChange={(newValue) => setfontSizeValue(newValue.target.value)}
          />
        </Grid>

        {
          (memeFont !== "") ? <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Word Font</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Word Font"
                className={classes.wordfont}
                value={memeFont}
                onChange={(font) => { changeFont(font.target.value) }}
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

        {
          memeList ? <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Meme Name</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Word Font"
                className={classes.wordList}
                value={memeName}
                onChange={(name) => { changeName(name.target.value) }}
              >
                {
                  memeList.map((name) => (
                    <MenuItem key={name} value={name}>{name}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
            :
            null
        }


        <Grid item xs={6}>
          <Button fullWidth color = "secondary" variant="outlined" className={classes.clear} onClick={() => clearEveryThing()}>Clear</Button>
        </Grid>

        <Grid item xs={6}>
          <Button fullWidth color = "secondary" variant="outlined" className={classes.generate} onClick={() => generateMeme()}>Generate</Button>
        </Grid>

        <Grid item xs={12}>
          <Button fullWidth variant="contained" href = {meme} download className={classes.export}>Export</Button>
        </Grid>

        {(meme === "") ? null
          :
          <Grid item xs={12} className={classes.memeGrid}>
            <img alt={"meme"} src={meme}></img>
          </Grid>
        }


      </Grid>
    </div>
  )
}

export default Main