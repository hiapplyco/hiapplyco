import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Center, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model({ url }: { url: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  useEffect(() => {
    // Apply purple-green gradient material to all meshes in the model
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color('#8B5CF6'),
          emissive: new THREE.Color('#10B981'),
          emissiveIntensity: 0.3,
          metalness: 0.8,
          roughness: 0.2,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
        });
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
        scale={isLoaded ? 2 : 0} 
        visible={isLoaded}
      >
        <primitive object={scene} />
      </group>
    </Center>
  );
}

// Solar flare effect component
function SolarFlare() {
  const flareRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (flareRef.current) {
      flareRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      flareRef.current.scale.set(scale, scale, 1);
    }
  });
  
  return (
    <mesh ref={flareRef} position={[0, 0, -1]}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial
        color="#8B5CF6"
        transparent
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
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
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8B5CF6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10B981" />
        <spotLight
          position={[0, 5, 0]}
          angle={0.5}
          penumbra={1}
          intensity={0.5}
          color="#8B5CF6"
        />
        
        {/* Solar flare effects */}
        <SolarFlare />
        <mesh position={[0, 0, -2]} scale={3}>
          <ringGeometry args={[1.5, 2, 32]} />
          <meshBasicMaterial
            color="#10B981"
            transparent
            opacity={0.2}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
        
        <Model url="/sample3.glb" />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      
      {/* Solar glow effect */}
      <div className="absolute inset-0 rounded-full pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-green-500/10 to-transparent rounded-full blur-xl" />
        <div className="absolute inset-0 bg-gradient-radial from-green-500/20 via-purple-500/10 to-transparent rounded-full blur-2xl animate-pulse" />
      </div>
      
      <div className="absolute inset-0 bg-white/5 rounded-full backdrop-blur-sm -z-10" />
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)',
          animation: 'pulse 4s infinite'
        }}
      />
    </div>
  );
};

useGLTF.preload('/sample3.glb');