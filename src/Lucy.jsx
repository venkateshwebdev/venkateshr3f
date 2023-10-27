
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lucy(props) {
  const { nodes, materials } = useGLTF("/model (11).gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lucy001.geometry}
        material={materials["Default OBJ.001"]}
      />
    </group>
  );
}

useGLTF.preload("/model (11).gltf");
