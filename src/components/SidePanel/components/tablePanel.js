import React, { useState } from 'react';
import { Button } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import SelectionCard from '../../selectionCard';
import ImageListComponent from '../../ImageListComponent';
import ResinPanel from './resinPanel';

function TablePanel() {
  const [value, setValue] = useState('home');

  const textureData = [
    { imageUrl: "/Texture/ash - frassino.webp", value: "ash - frassino.webp" },
    { imageUrl: "/Texture/birch - betulla.webp", value: "birch - betulla.webp" },
    { imageUrl: "/Texture/chestnut - castagno.webp", value: "chestnut - castagno.webp" },
    { imageUrl: "/Texture/elm - olmo.webp", value: "elm - olmo.webp" },
    { imageUrl: "/Texture/fir - abete.webp", value: "fir - abete.webp" },
    { imageUrl: "/Texture/glulam fir - abete lamellare af.webp", value: "glulam fir - abete lamellare af.webp" },
    { imageUrl: "/Texture/laminate - laminato.webp", value: "laminate - laminato.webp" },
    { imageUrl: "/Texture/larch - larice.webp", value: "larch - larice.webp" },
    { imageUrl: "/Texture/lebanese cedar - cedro libanese.webp", value: "lebanese cedar - cedro libanese.webp" },
    { imageUrl: "/Texture/maple - acero.webp", value: "maple - acero.webp" },
    { imageUrl: "/Texture/oak - rovere.webp", value: "oak - rovere.webp" },
    { imageUrl: "/Texture/olive - olivo.webp", value: "olive - olivo.webp" },
    { imageUrl: "/Texture/olive burl - olivo radica.webp", value: "olive burl - olivo radica.webp" },
    { imageUrl: "/Texture/poplar  burl - pioppo radica.webp", value: "poplar burl - pioppo radica.webp" },
    { imageUrl: "/Texture/poplar - pioppo.webp", value: "poplar - pioppo.webp" },
    { imageUrl: "/Texture/walnut - noce.webp", value: "walnut - noce.webp" }
  ];

  const shapeData = [
    { imageUrl: "/Shape/Ltable.png", value: "Ltable" },
    { imageUrl: "/Shape/circle.png", value: "circle" },
    { imageUrl: "/Shape/elips.png", value: "elips" },
    { imageUrl: "/Shape/rectangle.png", value: "rectangle" },
    { imageUrl: "/Shape/square.png", value: "square" }
  ];

  const edgeData = [
    { imageUrl: "/Edges/duz.png", value: "duz" },
    { imageUrl: "/Edges/natural.png", value: "natural" },
    { imageUrl: "/Edges/oval.png", value: "oval" },
  ]

  return (
    <TabContext value={value}>
      {value !== 'home' && (
        <Button variant="outlined" sx={{ color: 'white', marginBottom: 2, borderColor: 'white', ":hover": { borderColor: 'white' } }} onClick={() => setValue('home')}>
          Back
        </Button>
      )}

      <TabPanel value="home" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <SelectionCard style={{ marginBottom: 10 }} iconSrc={"/WoodIcon_.png"} title="Texture" subtitle="Select Table Texture" onClick={() => setValue('texture')} />
        <SelectionCard style={{ marginBottom: 10 }} iconSrc={"/ShapeIcon.png"} title="Shape" subtitle="Select Table Shape" onClick={() => setValue('shape')} />
        <SelectionCard style={{ marginBottom: 10 }} iconSrc={"/EdgeIcon.png"} title="Edge" subtitle="Select Table Edge" onClick={() => setValue('edge')} />
        <SelectionCard style={{ marginBottom: 10 }} iconSrc={"/ResinIcon.png"} title="Resin" subtitle="Select Table Resin" onClick={() => setValue('resin')} />
      </TabPanel>

      <TabPanel value="texture" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <ImageListComponent data={textureData} actionType="TableTexture" />
      </TabPanel>

      <TabPanel value="shape" style={{ padding: 0, maxHeight: '75vh', overflow: 'auto' }}>
        <ImageListComponent data={shapeData} actionType="TableModel" />
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
