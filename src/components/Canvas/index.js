import { Grid } from '@mui/material'
import React from 'react'
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  OrbitControls,
  Environment,
  ContactShadows,
  SpotLight,
} from "@react-three/drei";
import TableModel from '../TableModel';
import { HomeModel } from '../HomeModel';
import LegModel from '../LegModel';

function CanvasUI() {
  return (
    <Grid
      item xs={12} sm={8} lg={9} style={{ borderRight: "1px solid black", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Canvas
        style={{ height: "100%" }}
        camera={{ position: [0, 100, 100],  fov: 60 }}
        shadows
        frameloop="demand"

      >
        <ambientLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <TableModel positişon={[0, 0, 0]} />
        <LegModel position={[0, 0, 0]} />
        <HomeModel position={[0, 0, 0]} />
        <ContactShadows
          frames={1}
          scale={5}
          position={[0, -1, 0]}
          far={1}
          blur={5}
          opacity={0.5}
          color="#204080"
        />
        <OrbitControls
          minPolarAngle={Math.PI / 5} // Aşağı hareketi sınırlar
          maxPolarAngle={Math.PI / 2.3} // Yukarı hareketi sınırlar
          minDistance={2.7} // Kameranın minimum uzaklığı
          maxDistance={6.4} // Kameranın maksimum uzaklığı
        />
      </Canvas>        </Grid>
  )
}

export default CanvasUI