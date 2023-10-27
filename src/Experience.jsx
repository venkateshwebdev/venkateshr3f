import {
  CameraShake,
    ContactShadows,
  KeyboardControls,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  PresentationControls,
  SoftShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import { Physics } from "@react-three/rapier";

const Experience = () => {
  return (
    <KeyboardControls map={[
      {name:'forward',keys:['ArrowUp',"KeyW"]},
      {name:'backward',keys:['ArrowDown',"KeyS"]},
      {name:'leftward',keys:['ArrowLeft',"KeyA"]},
      {name:'rightward',keys:['ArrowRight',"KeyD"]}
    ]}>
    <Canvas shadows>
      <ContactShadows blur={8} />
      <OrthographicCamera makeDefault zoom={70} near={-100} position={[2,0,5]} />
        <ambientLight intensity={1} castShadow />
        <directionalLight intensity={1} position={[3, 5, 5]} castShadow />
        <Physics >
          <Scene />
        </Physics>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={1.5}
      />
    </Canvas>
    </KeyboardControls>
  );
};

export default Experience;
