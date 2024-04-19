import React from 'react';
import ColorPicker from '../../colorSelectionCardResin';
import { Slider, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setResinWidth } from '../../../features/tableValuesSlice';

function ResinPanel() {
  const dispatch = useDispatch();

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
      <div style={{ padding: '10px', border: "1px solid white", borderRadius: '10px', marginTop: '10px' }}>
        <center>
          <Typography color={'white'}>Resin Width</Typography>
        </center>

        <Slider
          defaultValue={30}
          valueLabelDisplay="auto"
          step={null}
          marks={[
            { value: 0},
            { value: 25 },
            { value: 50},
            { value: 75},
            { value: 100 }
          ]}
          min={0}
          max={100}
          onChange={(e, value) => {
            let adjustedValue = value;
            if (value === 25) {
              adjustedValue = 30;
            } else if (value === 75) {
              adjustedValue = 80;
            }
            dispatch(setResinWidth(adjustedValue));
          }}
        />


      </div>

    </div>
  );
}

export default ResinPanel;
