import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0.05, 0.2, 0.2]} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* Front */}
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />

        {/* Back */}
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          scale={1}
          map={decal}
          flatShading
        />

        {/* Top */}
        <Decal
          position={[0, 1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />

        {/* Bottom */}
        <Decal
          position={[0, -1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />

        {/* Left */}
        <Decal
          position={[-1, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1}
          map={decal}
          flatShading
        />

        {/* Right */}
        <Decal
          position={[1, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
