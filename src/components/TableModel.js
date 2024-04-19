import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";

function TableModel(props) {
  const tableValues = useSelector((state) => state.tableValues);
  const group = useRef();
  const { nodes } = useGLTF("/Tables.gltf");
  const [isLoading, setIsLoading] = useState(true);
  const [colorMap, setColorMap] = useState();
  console.log(nodes);

  useEffect(() => {
    const textureResolutions = [512, 1024, 4000]; // Örnek çözünürlükler
    let isInitialLoad = true;
    if (isInitialLoad) {
      setIsLoading(true);
        
    }

    textureResolutions.forEach(resolution => {
      new TextureLoader().load(
        `/Texture/${tableValues.texture}`, 
        // new TextureLoader().load(
        //   `/api/image?imagePath=TableTextures/texture${tableValues.texture}.webp&width=${resolution}&height=${resolution}&format=png`,
        (texture) => {
          setColorMap(texture);
          console.log(isInitialLoad);
          if (isInitialLoad) {
            setIsLoading(false);
            isInitialLoad = false; // İlk texture yüklendiğinde bu değeri güncelle
          }
        }
      );
    });
  }, [tableValues.texture]);

  return (
    <>
      {isLoading ? (
        <Html center>
          <h1 >Loading...</h1>
        </Html>
      ) : (
        <group ref={group} {...props} scale={1}>
          {/* Mesh ve material ayarlarınız burada */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes[`${tableValues.selectedModel}${tableValues.edgeType}${tableValues.resinWidth}_1`].geometry}
            >
            <meshStandardMaterial map={colorMap} />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes[`${tableValues.selectedModel}${tableValues.edgeType}${tableValues.resinWidth}_2`].geometry}
          >
            <meshStandardMaterial
              color={tableValues.resinColor}
             
              transparent
              opacity={0.5}
            />
          </mesh>
        </group>
      )}
    </>
  );
}
export default TableModel;
