import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import SelectionCard from '../../selectionCard';
import ImageListComponent from '../../ImageListComponent';
import ResinPanel from './resinPanel';
import { useSelector } from 'react-redux';
import ShapePanel from './shapePanel';

function TablePanel() {
  const [value, setValue] = useState('home');
  const { selectedModel } = useSelector((state) => ({
    selectedModel: state.tableValues.selectedModel
  }))
  const [edgeData, setEdgeData] = useState([
    { imageUrl: "/Edges/duz.png", value: "duz" },
    { imageUrl: "/Edges/natural.png", value: "natural" },
    { imageUrl: "/Edges/oval.png", value: "oval" },
  ]);

  // selectedModel değiştiğinde edgeData'yı güncelle
  useEffect(() => {
    if (selectedModel === 'Ltable') {
      const newEdgeData = edgeData.filter(item => item.value !== 'oval');
      setEdgeData(newEdgeData);
    } else {
      setEdgeData([
        { imageUrl: "/Edges/duz.png", value: "duz" },
        { imageUrl: "/Edges/natural.png", value: "natural" },
        { imageUrl: "/Edges/oval.png", value: "oval" },
      ]);
    }
  }, [selectedModel]);

  const textureData = [
    { "imageUrl": "/TextureShowcase/ashfrassino.webp", "value": "ashfrassino.webp" },
    { "imageUrl": "/TextureShowcase/birchbetulla.webp", "value": "birchbetulla.webp" },
    { "imageUrl": "/TextureShowcase/chestnutcastagno.webp", "value": "chestnutcastagno.webp" },
    { "imageUrl": "/TextureShowcase/elmolmo.webp", "value": "elmolmo.webp" },
    { "imageUrl": "/TextureShowcase/firabete.webp", "value": "firabete.webp" },
    { "imageUrl": "/TextureShowcase/glulamfirabetelamellareaf.webp", "value": "glulamfirabetelamellare.webp" },
    { "imageUrl": "/TextureShowcase/laminatelaminato.webp", "value": "laminatelaminato.webp" },
    { "imageUrl": "/TextureShowcase/larchlarice.webp", "value": "larchlarice.webp" },
    { "imageUrl": "/TextureShowcase/lebanesecedarcedrolibanese.webp", "value": "lebanesecedarcedrolibanese.webp" },
    { "imageUrl": "/TextureShowcase/mapleacero.webp", "value": "mapleacero.webp" },
    { "imageUrl": "/TextureShowcase/oakrovere.webp", "value": "oakrovere.webp" },
    { "imageUrl": "/TextureShowcase/oliveolivo.webp", "value": "oliveolivo.webp" },
    { "imageUrl": "/TextureShowcase/oliveburlolivoradica.webp", "value": "oliveburlolivoradica.webp" },
    { "imageUrl": "/TextureShowcase/poplarburlpiopporadica.webp", "value": "poplarburlpiopporadica.webp" },
    { "imageUrl": "/TextureShowcase/poplarpioppo.webp", "value": "poplarpioppo.webp" },
    { "imageUrl": "/TextureShowcase/walnutnoce.webp", "value": "walnutnoce.webp" }
  ];



  return (
    <TabContext value={value}>
      {value !== 'home' && (
        <Button variant="outlined" sx={{ color: 'white', marginBottom: 2, borderColor: 'white', ":hover": { borderColor: 'white' } }} onClick={() => setValue('home')}>
          Indietro
        </Button>
      )}

      <TabPanel value="home" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <SelectionCard style={{ marginBottom: 10 }} iconSrc={"/WoodIcon_.png"} title="LEGNO" subtitle="Seleziona il tipo di legno" onClick={() => setValue('texture')} />
        <SelectionCard style={{ marginBottom: 10 }} iconSrc={"/ShapeIcon.png"} title="FORMA E DIMENSIONI" subtitle="Scegli forma e misure del tavolo" onClick={() => setValue('shape')} />
        <SelectionCard style={{ marginBottom: 10 }} iconSrc={"/EdgeIcon.png"} title="Bordo" subtitle="Personalizza i lati del piano" onClick={() => setValue('edge')} />
        <SelectionCard style={{ marginBottom: 10 }} iconSrc={"/ResinIcon.png"} title="Resina" subtitle="Colori, trasparenza e pigmenti" onClick={() => setValue('resin')} />
      </TabPanel>

      <TabPanel value="texture" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <ImageListComponent data={textureData} actionType="TableTexture" />
      </TabPanel>

      <TabPanel value="shape" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <ShapePanel />
      </TabPanel>

      <TabPanel value="edge" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <ImageListComponent data={edgeData} actionType="EdgeType" />
      </TabPanel>

      <TabPanel value="resin" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <ResinPanel />
      </TabPanel>
    </TabContext>
  );
}

export default TablePanel;
