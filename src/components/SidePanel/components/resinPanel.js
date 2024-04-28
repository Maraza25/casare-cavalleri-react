import React from 'react';
import { Slider, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setResinColor, setResinOpacity, setResinWidth } from '../../../features/tableValuesSlice';
import { ColorPicker } from 'antd';

function ResinPanel() {
  const dispatch = useDispatch()
  const tableValues = useSelector((state) => state.tableValues);



  const handleChange = (colorValue) => {
    dispatch(setResinColor(colorValue));
  };

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
    <div style={{padding: "10px"}} >
      { /*<ColorPicker colors={colors} />*/}
      <ColorPicker style={{ width: '100%' }} disabledAlpha defaultFormat='hex' defaultValue={tableValues.resinColor} showText onChange={(color, hex) => {
        console.log(color.toRgbString);
        handleChange(hex)

      }} />
      <br/>
      <br/>


      <center>
        <Typography color={'white'}>Resin Width</Typography>
      </center>

      <Slider
        defaultValue={30}
        valueLabelDisplay="auto"
        step={null}
        marks={[
          { value: 0 },
          { value: 25 },
          { value: 50 },
          { value: 75 },
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


<br/>
      <center>
        <Typography color={'white'}>Resin Width</Typography>
      </center>

      <Slider
        defaultValue={tableValues.resinOpacity}
        valueLabelDisplay="auto"
        step={0.01}

        min={0}
        max={1}
        onChange={(e, value) => {
          let adjustedValue = value;
          if (value === 25) {
            adjustedValue = 30;
          } else if (value === 75) {
            adjustedValue = 80;
          }
          dispatch(setResinOpacity(adjustedValue));
        }}
      />



    </div>
  );
}

export default ResinPanel;
