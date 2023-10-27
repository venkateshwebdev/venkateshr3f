import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function LimeTree(props) {
  const { nodes, materials } = useGLTF("/model (9).gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-lime"].geometry}
        material={materials.color_main}
      />
    </group>
  );
}

useGLTF.preload("/model (9).gltf");