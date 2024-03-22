import React from 'react';
import ColorPicker from '../../colorSelectionCard';
import { Slider, Typography } from '@mui/material';

function ResinPanel() {
  const colors = [
    { colorName: 'Kırmızı', colorValue: '#FF0000' },
    { colorName: 'Yeşil', colorValue: '#00FF00' },
    { colorName: 'Mavi', colorValue: '#0000FF' },
    { colorName: 'Sarı', colorValue: '#FFFF00' },
    { colorName: 'Turuncu', colorValue: '#FFA500' },
    { colorName: 'Siyah', colorValue: '#000000' },
    { colorName: 'Beyaz', colorValue: '#FFFFFF' },
    { colorName: 'Gri', colorValue: '#808080' },
    { colorName: 'Mavi', colorValue: '#0000FF' },
    { colorName: 'Sarı', colorValue: '#FFFF00' },
    { colorName: 'Turuncu', colorValue: '#FFA500' },
    { colorName: 'Siyah', colorValue: '#000000' },
    { colorName: 'Beyaz', colorValue: '#FFFFFF' },
    { colorName: 'Gri', colorValue: '#808080' },
  ];

  return (
    <div >
      <ColorPicker colors={colors} />
      <div style={{padding: '10px', border: "1px solid white" ,borderRadius: '10px',marginTop: '10px'}}>
      <center>
        <Typography color={'white'}>Resin Width</Typography>
      </center>

      <Slider
        defaultValue={30}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
      </div>

    </div>
  );
}

export default ResinPanel;
