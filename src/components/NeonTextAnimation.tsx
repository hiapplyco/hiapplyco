
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

interface NeonTextAnimationProps {
  text: string;
}

export default function NeonTextAnimation({ text = "Apply" }: NeonTextAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    console.log("Initializing Three.js animation");

    // === Basic Scene Setup ===
    const scene = new THREE.Scene();
    // scene.fog = new THREE.FogExp2(0x000000, 0.03); // Add fog for depth

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false, // Disable antialias for performance when using post-processing
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 7;

    // === Post-processing (Bloom) ===
    const renderScene = new RenderPass(scene, camera);
    
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5, // strength
      0.4, // radius
      0.85 // threshold
    );
    bloomPass.strength = 2.0;
    bloomPass.radius = 0.5;
    bloomPass.threshold = 0.1;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // === Font Loading and Particle Generation ===
    const fontLoader = new FontLoader();
    let particleSystem: THREE.Points | null = null;
    let originalPositions: Float32Array | null = null;
    let originalColors: Float32Array | null = null;

    const particleMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.08,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    fontLoader.load(
      "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        try {
          const textGeometry = new TextGeometry(text, {
            font: font,
            size: 1.5,
            height: 0.2,
            curveSegments: 4, // Reduced for performance
            bevelEnabled: true,
            bevelThickness: 0.1,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 3, // Reduced for performance
          });

          textGeometry.center();

          // Efficiently sample points
          const sampledPositions: number[] = [];
          const sampledColors: number[] = [];
          const color = new THREE.Color();

          // Use non-indexed geometry for easier sampling
          const nonIndexedGeometry = textGeometry.toNonIndexed();
          const positions = nonIndexedGeometry.attributes.position.array;
          const count = positions.length / 3;
          
          // Density factor - skip vertices to control count
          const step = 3; 

          for (let i = 0; i < count; i += step) {
             const x = positions[i * 3];
             const y = positions[i * 3 + 1];
             const z = positions[i * 3 + 2];

             // Add multiple layers of particles for volume
             for(let j=0; j<2; j++) {
                sampledPositions.push(
                  x + (Math.random() - 0.5) * 0.1,
                  y + (Math.random() - 0.5) * 0.1,
                  z + (Math.random() - 0.5) * 0.1
                );

                // Gradient colors: Purple to Green/Blue
                // Map X position to hue
                const normalizedX = (x + 2) / 4; // Approximate normalization
                const hue = 0.7 + normalizedX * 0.2; // Purple (0.7) to Blue/Green range
                const saturation = 0.9;
                const lightness = 0.6;
                
                color.setHSL(hue % 1, saturation, lightness);
                sampledColors.push(color.r, color.g, color.b);
             }
          }

          const particleGeometry = new THREE.BufferGeometry();
          const finalPositions = new Float32Array(sampledPositions);
          const finalColors = new Float32Array(sampledColors);

          particleGeometry.setAttribute("position", new THREE.BufferAttribute(finalPositions, 3));
          particleGeometry.setAttribute("color", new THREE.BufferAttribute(finalColors, 3));

          originalPositions = new Float32Array(finalPositions);
          originalColors = new Float32Array(finalColors);

          particleSystem = new THREE.Points(particleGeometry, particleMaterial);
          scene.add(particleSystem);

          textGeometry.dispose();
          nonIndexedGeometry.dispose();
          setIsLoading(false);

        } catch (error) {
          console.error("Error during particle generation:", error);
          setError(`Error creating particles: ${error instanceof Error ? error.message : "Unknown error"}`);
          setIsLoading(false);
        }
      },
      undefined,
      (err) => {
        console.error("Font loading failed:", err);
        setError("Error loading font.");
        setIsLoading(false);
      }
    );

    // === Animation Loop ===
    const clock = new THREE.Clock();
    let animationFrameId: number;
    
    // Mouse interaction
    const mouse = new THREE.Vector2();
    const targetMouse = new THREE.Vector2();
    
    const onMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth mouse movement
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      if (particleSystem && originalPositions) {
        const positions = particleSystem.geometry.attributes.position.array;
        const count = positions.length / 3;

        // Camera subtle movement
        camera.position.x = Math.sin(time * 0.2) * 0.5;
        camera.position.y = Math.cos(time * 0.2) * 0.5;
        camera.lookAt(0, 0, 0);

        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          const ox = originalPositions[i3];
          const oy = originalPositions[i3 + 1];
          const oz = originalPositions[i3 + 2];

          // Noise / Wave effect
          const waveX = Math.sin(oy * 2 + time) * 0.05;
          const waveY = Math.cos(ox * 2 + time) * 0.05;
          const waveZ = Math.sin((ox + oy) * 5 + time) * 0.05;

          // Mouse repulsion
          const dx = ox - mouse.x * 5; // Scale mouse influence
          const dy = oy - mouse.y * 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repulsion = Math.max(0, 1.5 - dist); // Radius of 1.5

          positions[i3] = ox + waveX + (dx / dist) * repulsion * 0.5;
          positions[i3 + 1] = oy + waveY + (dy / dist) * repulsion * 0.5;
          positions[i3 + 2] = oz + waveZ + repulsion * 0.5;
        }
        
        particleSystem.geometry.attributes.position.needsUpdate = true;
        particleSystem.rotation.y = time * 0.05;
      }

      composer.render();
    }

    animate();

    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      
      if (particleSystem) {
        scene.remove(particleSystem);
        particleSystem.geometry.dispose();
        particleMaterial.dispose();
      }
      renderer.dispose();
      composer.dispose();
    };
  }, [text]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center text-white/50">
          Loading...
        </div>
      )}
    </div>
  );
}
