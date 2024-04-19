import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useSelector } from "react-redux";

function LegModel(props ) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/legs.gltf");
  const tableValues = useSelector((state) => state.tableValues);
  const legValues = useSelector((state) => state.legValues);
  console.log("nodesss" , nodes);
  console.log("değerler ", legValues);

  // Ayak modeli son ekinin belirlenmesi
  let legSuffix;
  if (tableValues.selectedModel === "Ltable") {
    
    legSuffix = "002";
  } else if (tableValues.selectedModel === "square" || tableValues.selectedModel === "circle") {
    legSuffix = "001";
  } else {
    legSuffix = ""; // Diğer durumlar için ek yok
  }

  // Tam ayak model adının oluşturulması
  const legModelName = `${legValues.legModel}${legSuffix}`;
  console.log("Selected leg model: ", legModelName);

  // Geometrinin belirlenmesi
  const legGeometry = nodes[legModelName]?.geometry;

  console.log("Geometry: ", legGeometry);
  return (
    <group ref={group} {...props} dispose={null} scale={1}>
      <mesh castShadow receiveShadow geometry={legGeometry}>
        <meshStandardMaterial metalness={1} roughness={0.2} color={legValues.legColor} />
      </mesh>
    </group>
  );
}
export default LegModel;
