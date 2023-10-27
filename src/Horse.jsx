import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Horse(props) {
  const { nodes, materials } = useGLTF("/model (8).gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chair.geometry}
        material={materials["BrownDark.052"]}
      />
    </group>
  );
}

useGLTF.preload("/model (8).gltf");