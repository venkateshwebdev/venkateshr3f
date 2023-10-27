import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"
export function Model(props) {
    const rigidRef = useRef()
    const group = useRef()
  const { nodes, materials } = useGLTF("/cExH-911-transformed.glb");
  const doSomething = (e)=>{
    console.log("i am clicked ",e)
    if(e.key==="ArrowUp"){
    rigidRef.current.applyImpulse({ x: 0, y: 0, z: 0.5 })
    }
    if(e.key==="ArrowDown"){
        rigidRef.current.applyImpulse({ x: 0, y:0, z: -0.5 })
        // rigidRef.current.rotation.z=-Math.PI/2
        // group.current.rotation.z=-Math.PI/2
    }
    if(e.key==="ArrowLeft"){
        rigidRef.current.applyImpulse({ x: -0.5, y:0, z: 0 })
        // rigidRef.current.rotation.y=-Math.PI/2
        // group.current.rotation.y=-Math.PI/2
    }
    if(e.key==="ArrowRight"){
        rigidRef.current.applyImpulse({ x: 0.5, y:0, z: 0 })
        // rigidRef.current.rotation.y=Math.PI/2
        // group.current.rotation.y=Math.PI/2
    }
    console.log(rigidRef.current)
  }
  useEffect(()=>{
    window.addEventListener("keydown",doSomething)
    return()=>window.removeEventListener("keydown",doSomething)
  },[])
  useFrame((state,delta)=>{
    const cameraPosition = new THREE.Vector3()
    cameraPosition.copy(rigidRef.current.translation())
    cameraPosition.x+=1
    cameraPosition.z+=2.25
    cameraPosition.y+=0.65
    const cameraTarget = new THREE.Vector3()
    cameraTarget.copy(rigidRef.current.translation())
    cameraTarget.z+=0.25
    state.camera.position.copy(cameraPosition)
    state.camera.lookAt(cameraTarget)
  })
  return (
    <RigidBody ref={rigidRef} colliders={false} canSleep={false}>
    <group {...props} ref={group} dispose={null} scale={0.6} position={[0,0.5,-3]}>
      <group
        position={[-0.015, -0.009, 0.063]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.578}
      >
        <group position={[0, 0, 0.029]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000_0.geometry}
            material={materials.silver}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000_1.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000_2.geometry}
            material={materials.rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder000_3.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group position={[0, 0, 0.029]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_0.geometry}
            material={materials.silver}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_2.geometry}
            material={materials.rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_3.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group position={[0, -0.003, 0.007]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.windshield_0.geometry}
            material={materials.window}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.windshield_1.geometry}
            material={materials.plastic}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot001_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot002_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot003_0.geometry}
          material={materials.tex_shiny}
          position={[0, 0.003, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot004_0.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot005_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot006_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot007_0.geometry}
          material={materials.logo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot008_0.geometry}
          material={materials.paint}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot009_0.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot010_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot011_0.geometry}
          material={materials.coat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.boot011_0001.geometry}
          material={materials.coat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front001_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front001_1.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front001_2.geometry}
          material={materials.lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front003_0.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front003_1.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front004_0.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front004_1.geometry}
          material={materials.lights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front004_2.geometry}
          material={materials.plastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front007_0.geometry}
          material={materials.glass}
          rotation={[-0.006, 0, 0]}
          scale={1.036}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bumper_front009_0.geometry}
          material={materials.tex_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_0.geometry}
          material={materials.plastic}
          position={[0.036, -1.56, 0.333]}
          rotation={[0.709, -0.071, -0.245]}
          scale={[0.014, 0.014, 0.012]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_0.geometry}
          material={materials.full_black}
          scale={[0.332, 0.318, 0.318]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_0.geometry}
          material={materials.tex_shiny}
          position={[0.005, 3.581, 0.107]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_0.geometry}
          material={materials.paint}
          position={[-1.053, 3.51, -0.126]}
          rotation={[-1.439, -0.62, 0.775]}
          scale={0.024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_0.geometry}
          material={materials.paint}
          position={[0.436, 3.723, -0.117]}
          rotation={[-1.483, 0.105, 0.803]}
          scale={0.024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_0.geometry}
          material={materials.paint}
          position={[-0.488, 3.684, -0.328]}
          rotation={[-1.415, -0.045, 0.802]}
          scale={0.059}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_0.geometry}
          material={materials.license}
          position={[0, 3.704, -0.292]}
          rotation={[0.114, 0, 0]}
          scale={[0.393, 0.393, 0.356]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_0.geometry}
          material={materials.license}
          position={[0, -3.75, -0.432]}
          rotation={[0.082, 0, -Math.PI]}
          scale={[0.395, 0.395, 0.357]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.underbody_0.geometry}
          material={materials.full_black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window_rear_0.geometry}
          material={materials.window}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window_rear001_0.geometry}
          material={materials.full_black}
        />
      </group>
    </group>
    <CuboidCollider position={[0,0.5,-3]} args={[0.5,0.3,1]} />
    </RigidBody>
  );
}

useGLTF.preload("/cExH-911-transformed.glb");
