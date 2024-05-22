import React from 'react';
import { useGLTF } from '@react-three/drei';

export function HomeModel({ position }) {
  const gltf = useGLTF('/villa/villa.gltf', true); // useGLTF hook'unu kullanarak modeli yükle
  return <primitive object={gltf.scene} position={position} />;
}
