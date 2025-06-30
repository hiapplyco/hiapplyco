import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }: { url: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  useEffect(() => {
    // Apply purple-green gradient material
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Create gradient material with purple base
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#8B5CF6'),  // Purple
          emissive: new THREE.Color('#10B981'),  // Green emissive
          emissiveIntensity: 0.15,
          metalness: 0.4,
          roughness: 0.6,
        });
        // Remove any outlines or edges
        child.material.wireframe = false;
      }
    });
    setIsLoaded(true);
  }, [scene]);
  
  useFrame((state, delta) => {
    if (meshRef.current && isLoaded) {
      meshRef.current.rotation.y += delta * 0.5;
      // Add subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Center>
      <group 
        ref={meshRef} 
        scale={isLoaded ? 3.5 : 0} 
        visible={isLoaded}
      >
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
      className="relative w-40 h-40 cursor-pointer overflow-hidden rounded-full"
      onClick={onClick}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#10B981" />
        <directionalLight position={[0, 5, 5]} intensity={0.5} color="#FFFFFF" />
        
        <Model url="/sample3.glb" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      
      {/* Purple-green glow effect */}
      <div className="absolute inset-0 rounded-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/30 via-green-500/15 to-transparent rounded-full blur-xl" />
        <div className="absolute inset-0 bg-gradient-radial from-green-500/20 via-purple-500/15 to-transparent rounded-full blur-2xl animate-pulse" />
      </div>
      
      <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm -z-10" />
    </div>
  );
};

useGLTF.preload('/sample3.glb');