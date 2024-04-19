import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import SelectionCard from '../../selectionCard';
import ImageListComponent from '../../ImageListComponent';
import ColorPicker from '../../colorSelectionCardLeg';
import { useSelector } from 'react-redux';

function LegPanel() {
  const [value, setValue] = useState('home');
  const { selectedModel } = useSelector((state) => ({
    selectedModel: state.tableValues.selectedModel,
  }));

  const lTableLegs = [
    1, 2, 7, 9, 12, 13, 15, 16, 17, 18, 19, 21, 23, 29, 31, 34,
  ];

  const [filteredLegs, setFilteredLegs] = useState([]);

  useEffect(() => {
    if (selectedModel === 'Ltable') {
      setFilteredLegs(legModelData.filter(leg => lTableLegs.includes(parseInt(leg.value.substring(3)))));
    } else {
      setFilteredLegs(legModelData);
    }
  }, [selectedModel]);

  const legModelData = [
    { imageUrl: "/LegModels/leg1.png", value: "leg1" },
    { imageUrl: "/LegModels/leg2.png", value: "leg2" },
    { imageUrl: "/LegModels/leg3.png", value: "leg3" },
    { imageUrl: "/LegModels/leg4.png", value: "leg4" },
    { imageUrl: "/LegModels/leg5.png", value: "leg5" },
    { imageUrl: "/LegModels/leg6.png", value: "leg6" },
    { imageUrl: "/LegModels/leg7.png", value: "leg7" },
    { imageUrl: "/LegModels/leg8.png", value: "leg8" },
    { imageUrl: "/LegModels/leg9.png", value: "leg9" },
    { imageUrl: "/LegModels/leg10.png", value: "leg10" },
    { imageUrl: "/LegModels/leg11.png", value: "leg11" },
    { imageUrl: "/LegModels/leg12.png", value: "leg12" },
    { imageUrl: "/LegModels/leg13.png", value: "leg13" },
    { imageUrl: "/LegModels/leg14.png", value: "leg14" },
    { imageUrl: "/LegModels/leg15.png", value: "leg15" },
    { imageUrl: "/LegModels/leg16.png", value: "leg16" },
    { imageUrl: "/LegModels/leg17.png", value: "leg17" },
    { imageUrl: "/LegModels/leg18.png", value: "leg18" },
    { imageUrl: "/LegModels/leg19.png", value: "leg19" },
    { imageUrl: "/LegModels/leg20.png", value: "leg20" },
    { imageUrl: "/LegModels/leg21.png", value: "leg21" },
    { imageUrl: "/LegModels/leg22.png", value: "leg22" },
    { imageUrl: "/LegModels/leg23.png", value: "leg23" },
    { imageUrl: "/LegModels/leg24.png", value: "leg24" },
    { imageUrl: "/LegModels/leg25.png", value: "leg25" },
    { imageUrl: "/LegModels/leg26.png", value: "leg26" },
    { imageUrl: "/LegModels/leg27.png", value: "leg27" },
    { imageUrl: "/LegModels/leg28.png", value: "leg28" },
    { imageUrl: "/LegModels/leg29.png", value: "leg29" },
    { imageUrl: "/LegModels/leg30.png", value: "leg30" },
    { imageUrl: "/LegModels/leg31.png", value: "leg31" },
    { imageUrl: "/LegModels/leg32.png", value: "leg32" },
    { imageUrl: "/LegModels/leg33.png", value: "leg33" },
    { imageUrl: "/LegModels/leg34.png", value: "leg34" },
    { imageUrl: "/LegModels/leg35.png", value: "leg35" },
    { imageUrl: "/LegModels/leg36.png", value: "leg36" }


  ]

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
    <TabContext value={value}>
      {value !== 'home' && (
        <Button variant="outlined" sx={{ color: 'white', marginBottom: 2, borderColor: 'white', ":hover": { borderColor: 'white' } }} onClick={() => setValue('home')}>
          Back
        </Button>
      )}

      <TabPanel value="home" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <SelectionCard style={{ marginBottom: 10 }} iconSrc={"/LegIcon.png"} title="Leg" subtitle="Select Table Leg" onClick={() => setValue('legModel')} />
        <SelectionCard style={{ marginBottom: 10 }} iconSrc={"/color.png"} title="Color" subtitle="Select Table Color" onClick={() => setValue('color')} />
      </TabPanel>

      <TabPanel value="legModel" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <ImageListComponent data={filteredLegs} actionType="LegModel" />
      </TabPanel>

      <TabPanel value="color" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <ColorPicker style={{ maxHeight: '75vh', }} colors={colors} />

      </TabPanel>


    </TabContext>
  );
}

export default LegPanel;
