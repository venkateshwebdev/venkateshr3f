import {
    ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import { Physics } from "@react-three/rapier";

const Experience = () => {
  return (
    <Canvas shadows camera={{position:[3,2,5]}}>
        <ContactShadows blur={3} />
        <ambientLight intensity={1} />
        <directionalLight intensity={1} position={[0, 5, 5]} />
        <Physics >
          <Scene />
        </Physics>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={1.5}
        // enableRotate={false}
      />
    </Canvas>
  );
};

export default Experience;
