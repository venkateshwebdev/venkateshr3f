import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/model (6).gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["tree-beech"].geometry}
        material={materials.color_main}
      />
    </group>
  );
}

useGLTF.preload("/model (6).gltf");