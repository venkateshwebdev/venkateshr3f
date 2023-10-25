import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { Car } from "./Car";
import { Center, Text3D } from "@react-three/drei";
import { Tree } from "./Tree";

const Scene = () => {
  const name = ["V", "E", "N", "K", "A", "T", "E", "S", "H"];
  return (
    <group>
        <RigidBody resistution={0.5} position={[-2,0,0]}>
          <Text3D font={"/beba.json"} size={1} height={0.3} curveSegments={12} >
            V
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
        <RigidBody resistution={0.5} position={[-1.5,0,0]}>
          <Text3D font={"/beba.json"} size={1} height={0.3} curveSegments={12} >
            E
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
        <RigidBody resistution={0.5} position={[-1,0,0]}>
          <Text3D font={"/beba.json"} size={1} height={0.3} curveSegments={12}  >
            N
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
        <RigidBody resistution={0.5} position={[-0.5,0,0]}>
          <Text3D font={"/beba.json"} size={1} height={0.3} curveSegments={12} >
            K
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
        <RigidBody resistution={0.5} position={[0,0,0]}>
          <Text3D font={"/beba.json"} size={1} height={0.3} curveSegments={12} >
            A
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
       <RigidBody resistution={0.5} position={[0.5,0,0]}>
          <Text3D font={"/beba.json"} size={1} height={0.3} curveSegments={12} >
            T
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
        <RigidBody resistution={0.5} position={[1,0,0]}>
          <Text3D font={"/beba.json"} size={1} height={0.3} curveSegments={12} >
            E
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
        <RigidBody resistution={0.5}position={[1.5,0,0]}>
          <Text3D font={"/beba.json"} size={1} height={0.3} curveSegments={12} >
            S
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
        <RigidBody resistution={0.5} poaition={[2,0,0]}>
          <Text3D font={"/beba.json"} size={1} height={0.3} curveSegments={12} >
            H
            <meshStandardMaterial />
          </Text3D>
        </RigidBody>
      <Car />
      <RigidBody position={[3,0,-2]} type={"fixed"}>
      <Tree scale={0.1} />
      </RigidBody>
      <RigidBody type="fixed" resistution={0.2} friction={1}>
        <mesh>
          <boxGeometry args={[1000, 0.1, 1000]} />
          <meshPhongMaterial color="#ff0000" opacity={0} transparent />
        </mesh>
      </RigidBody>
    </group>
  );
};

export default Scene;
