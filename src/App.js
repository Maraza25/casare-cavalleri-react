import React from 'react'
import { Grid, Button } from '@mui/material'
import SidePanel from './components/SidePanel'
import CanvasUI from './components/Canvas/index';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Toaster />

      <Grid container>
        <CanvasUI />
        <SidePanel />
      </Grid>
    </>)

}

export default App