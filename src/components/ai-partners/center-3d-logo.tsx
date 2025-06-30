import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }: { url: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Center>
      <group ref={meshRef} scale={2}>
        <primitive object={scene} />
      </group>
    </Center>
  );
}

interface Center3DLogoProps {
  onClick: () => void;
}

export const Center3DLogo = ({ onClick }: Center3DLogoProps) => {
  return (
    <div 
      className="relative w-40 h-40 cursor-pointer"
      onClick={onClick}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Model url="/sample3.glb" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      
      <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-md -z-10" />
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          animation: 'pulse 3s infinite'
        }}
      />
    </div>
  );
};

useGLTF.preload('/sample3.glb');