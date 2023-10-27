import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three"
export function Car(props) {
  const group = useRef();
  const rigidRef = useRef();
  const {camera} = useThree()
  const { nodes, materials, animations } = useGLTF("/Aw3E-car-transformed.glb");
  const { actions } = useAnimations(animations, group);
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
    cameraPosition.z+=2.25
    cameraPosition.y+=0.65
    const cameraTarget = new THREE.Vector3()
    cameraTarget.copy(rigidRef.current.translation())
    cameraTarget.z+=0.25
    state.camera.position.copy(cameraPosition)
    state.camera.lookAt(cameraTarget)
  })
  return (
    <RigidBody ref={rigidRef} colliders={false} >
    <group ref={group} {...props} dispose={null} scale={0.4} position={[0,0.5,-3]}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.379}
        >
          <group
            name="b7442e26e25842a8b9888e6c536fe8d3fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Car" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_78"
                      geometry={nodes.Object_78.geometry}
                      material={materials.Mat_Robot}
                      skeleton={nodes.Object_78.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
    <CuboidCollider position={[0,0.5,-3]} args={[1,0.5,1]}/>
    </RigidBody>
  );
}

useGLTF.preload("/Aw3E-car-transformed.glb");
