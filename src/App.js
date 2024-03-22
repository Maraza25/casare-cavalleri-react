import React from 'react'
import Canvas from './components/Canvas'
import { Grid } from '@mui/material'
import SidePanel from './components/SidePanel'
function App() {
  return (
    <>
        <Grid container>
          <Canvas />
          <SidePanel />
        </Grid>
    </>)

}

export default App