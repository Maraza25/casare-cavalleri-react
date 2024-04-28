import React from 'react';
import { Grid, CircularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import SidePanel from './components/SidePanel';
import CanvasUI from './components/Canvas/index';
import { Toaster } from 'react-hot-toast';

function App() {
  // Redux'tan 'loading' ve 'totalLoaded' durumlarını al
  const progress = useSelector((state) => state.sidePanel.progress);

  return (
    <>
      <Toaster />

      {progress < 100  ? (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }}>
            <CircularProgress />
            <Typography variant="body1" style={{ marginTop: '10px' }}>Yükleniyor...</Typography>
            <Typography variant="body2">{`Toplam yüklenen veri: ${progress}%`}</Typography>
          </div>
        </div>
      ): null} 
        <Grid container>
          <CanvasUI />
          <SidePanel />
        </Grid>
      
    </>
  );
}

export default App;
