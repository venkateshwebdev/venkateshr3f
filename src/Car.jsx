import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useThree } from "@react-three/fiber";

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
    }
    if(e.key==="ArrowLeft"){
        rigidRef.current.applyImpulse({ x: -0.5, y:0, z: 0 })
    }
    if(e.key==="ArrowRight"){
        rigidRef.current.applyImpulse({ x: 0.5, y:0, z: 0 })
    }
    // camera.lookAt([group.current.position.x,group.current.position.y,group.current.position.z])
    // camera.position([group.current.position.x,group.current.position.y,group.current.position.z])
  }
  useEffect(()=>{
    window.addEventListener("keydown",doSomething)
    return()=>window.removeEventListener("keydown",doSomething)
  },[])
  return (
    <RigidBody restitution={0.5} ref={rigidRef} >
    <group ref={group} {...props} dispose={null} scale={0.4} position={[0,0.1,-2]}>
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
    {/* <CuboidCollider position={[0,0.1,-2]} args={[0.5,0.5,1]}/> */}
    </RigidBody>
  );
}

useGLTF.preload("/Aw3E-car-transformed.glb");
