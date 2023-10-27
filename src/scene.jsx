import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Car } from "./Car";
import { Center, Text3D } from "@react-three/drei";
import { Tree } from "./Tree";
import { Lucy } from "./Lucy";
import { Horse } from "./Horse";
import { Rocks } from "./rocks";
import { StoneScene } from "./stoneSecene";
import { LimeTree } from "./LimeTree";
import { Model } from "./porsche";
import { Trucker } from "./Truck";

const Scene = () => {
  const name = ["V", "E", "N", "K", "A", "T", "E", "S", "H"," ","S", "I", "R", "I", "G", "I", "N", "E", "E","D","I"];
  const sname = ["S", "I", "R", "I", "G", "I", "N", "E", "E","D","I"];
  return (
    <group>
      {name.map((e,i) => (
        <group position={[-4,0,1]}>
        <RigidBody shape="cuboid" resistution={0.5} position={[i*0.5, 0, 0]}>
          <Text3D
            castShadow
            receiveShadow
            font={"/beba.json"}
            size={1}
            height={0.3}
            curveSegments={12}
            // bevelEnabled
            // font: font,
            // size: 80,
            // height: 5,
            // curveSegments: 12,
            // bevelEnabled: true,
            // bevelThickness: 10,
            // bevelSize: 8,
            // bevelOffset: 0,
            // bevelSegments: 5
          >
            {e}
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
        </group>
      ))}
            {/* {sname.map((e,i) => (
        <group position={[0,0,0]}>
        <RigidBody shape="cuboid" resistution={0.5} position={[i*0.5, 0, 0]}>
          <Text3D
            castShadow
            receiveShadow
            font={"/beba.json"}
            size={1}
            height={0.3}
            curveSegments={12}
          >
            {e}
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
        </group>
      ))} */}
      <Trucker />
      {/* <Lucy position={[5, 0.5, 0]} /> */}
      {/* <Horse position={[5, 0, 3]} /> */}
      {name.slice(0,name,length/2).map((e,i)=>
      <RigidBody ke type="fixed" colliders="cuboid">
        <Rocks position={[(Math.random() * 40) - 20,0,(Math.random() * 40) - 20]} />
        </RigidBody>
      )}
      <RigidBody position={[-5, 0, 0]} type={"fixed"}>
        <LimeTree scale={0.1} />
      </RigidBody>
      <RigidBody position={[5.5, 0, 0]} type={"fixed"}>
        <Tree scale={0.1} />
      </RigidBody>
      <RigidBody type="fixed" resistution={0.5} friction={2}>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[100, 0.5, 100]} />
          <meshBasicMaterial color="#ff0000" opacity={0} transparent />
        </mesh>
      </RigidBody>
    </group>
  );
};

export default Scene;
