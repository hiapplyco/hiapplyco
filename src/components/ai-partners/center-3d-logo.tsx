import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useGLTF, Center, OrbitControls, Environment, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Create gradient shader material
const GradientMaterial = shaderMaterial(
  { 
    uTime: 0,
    uColorA: new THREE.Color('#8B5CF6'),
    uColorB: new THREE.Color('#10B981')
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      // Create gradient from top to bottom
      float mixValue = (vPosition.y + 1.0) * 0.5;
      vec3 color = mix(uColorB, uColorA, mixValue);
      
      // Add slight animation
      color += 0.1 * sin(uTime * 0.5 + vPosition.y * 2.0);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ GradientMaterial });

function Model({ url }: { url: string }) {
  const meshRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);
  const { scene } = useGLTF(url);
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  useEffect(() => {
    // Apply gradient material to all meshes
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Store original geometry
        const geometry = child.geometry;
        
        // Apply our custom gradient material
        child.material = new THREE.ShaderMaterial({
          uniforms: {
            uTime: { value: 0 },
            uColorA: { value: new THREE.Color('#8B5CF6') }, // Purple
            uColorB: { value: new THREE.Color('#10B981') }  // Green
          },
          vertexShader: `
            varying vec3 vPosition;
            void main() {
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform float uTime;
            uniform vec3 uColorA;
            uniform vec3 uColorB;
            varying vec3 vPosition;
            
            void main() {
              // Create vertical gradient
              float gradientFactor = (vPosition.y + 1.0) * 0.5;
              
              // Mix colors
              vec3 color = mix(uColorB, uColorA, gradientFactor);
              
              // Add shimmer effect
              float shimmer = sin(uTime * 2.0 + vPosition.y * 3.0) * 0.05 + 0.95;
              color *= shimmer;
              
              gl_FragColor = vec4(color, 1.0);
            }
          `
        });
        
        materialRef.current = child.material;
      }
    });
    setIsLoaded(true);
  }, [scene]);
  
  useFrame((state, delta) => {
    if (meshRef.current && isLoaded) {
      meshRef.current.rotation.y += delta * 0.5;
      // Add subtle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Update shader time uniform
      if (materialRef.current && materialRef.current.uniforms) {
        materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      }
    }
  });

  return (
    <Center>
      <group 
        ref={meshRef} 
        scale={isLoaded ? 2.8 : 0} 
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
      className="relative w-48 h-48 cursor-pointer overflow-visible"
      onClick={onClick}
    >
      {/* Outer sun glow layers */}
      <div className="absolute -inset-8 rounded-full opacity-40">
        <div className="absolute inset-0 bg-yellow-300/30 rounded-full blur-3xl" />
      </div>
      <div className="absolute -inset-6 rounded-full opacity-60">
        <div className="absolute inset-0 bg-yellow-400/40 rounded-full blur-2xl" />
      </div>
      <div className="absolute -inset-4 rounded-full opacity-80">
        <div className="absolute inset-0 bg-yellow-500/50 rounded-full blur-xl" />
      </div>
      
      {/* Main sun container */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 40 }}
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
        
        {/* Yellow sun background with gradient */}
        <div className="absolute inset-0 rounded-full -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-full" />
        </div>
        
        {/* Inner sun glow effect */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-white/40 via-yellow-300/20 to-transparent rounded-full" />
          <div className="absolute inset-0 bg-gradient-radial from-yellow-200/30 via-transparent to-transparent rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
        </div>
        
        {/* Soft edge fade */}
        <div className="absolute inset-0 rounded-full pointer-events-none" style={{
          background: 'radial-gradient(circle at center, transparent 70%, rgba(255, 255, 255, 0.1) 100%)',
        }} />
      </div>
      
      {/* Outer corona effect */}
      <div className="absolute -inset-2 rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}>
        <div className="absolute inset-0 rounded-full" style={{
          background: 'radial-gradient(circle at center, transparent 50%, rgba(251, 191, 36, 0.2) 70%, transparent 100%)',
        }} />
      </div>
    </div>
  );
};

useGLTF.preload('/sample3.glb');