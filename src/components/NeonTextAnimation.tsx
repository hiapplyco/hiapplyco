
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

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
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 6; // Move camera slightly further back for bevel room

    // Add a simple cube to test if Three.js is working
    const testCube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xff00ff }));
    scene.add(testCube);

    // Render the test cube once
    renderer.render(scene, camera);
    console.log("Test cube rendered");

    // === Font Loading and Particle Generation ===
    const fontLoader = new FontLoader();
    let particleSystem: THREE.Points | null = null;
    let originalPositions: Float32Array | null = null;
    const targetParticleCount = 10000; // Reduced for better performance

    const particleMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.05, // Increased size for better visibility
      sizeAttenuation: true,
    });

    console.log("Loading font...");
    fontLoader.load(
      "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/fonts/helvetiker_regular.typeface.json",
      (font) => {
        console.log("Font loaded successfully");
        try {
          // Remove test cube once font is loaded
          scene.remove(testCube);

          // --- Create Text Geometry with Bevel for Balloon Effect ---
          const textGeometry = new TextGeometry(text, {
            font: font,
            size: 1,
            height: 0.2, // Increase height for thickness
            curveSegments: 8, // Reduced for better performance
            bevelEnabled: true, // Enable bevel
            bevelThickness: 0.1, // How far the bevel goes back
            bevelSize: 0.05, // How far the bevel goes wide from the edge
            bevelOffset: 0,
            bevelSegments: 5, // Reduced for better performance
          });

          // --- Center the Geometry ---
          textGeometry.computeBoundingBox();
          if (textGeometry.boundingBox) {
            const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
            const textHeight = textGeometry.boundingBox.max.y - textGeometry.boundingBox.min.y;
            textGeometry.translate(-textWidth / 2, -textHeight / 2, 0); // Center on X, Y
          }

          console.log("Text geometry created and centered");

          // --- Sample points uniformly across triangle surfaces ---
          const sampledPositions: number[] = [];
          const sampledColors: number[] = [];
          const color = new THREE.Color();

          // Simplified approach: sample points directly from the geometry
          const nonIndexedGeometry = textGeometry.toNonIndexed();
          const positions = nonIndexedGeometry.attributes.position.array;

          // Sample a subset of points from the geometry
          for (let i = 0; i < positions.length; i += 9) {
            // Each triangle has 3 vertices (9 values)
            for (let j = 0; j < 3; j++) {
              // For each vertex in the triangle
              const baseIndex = i + j * 3;

              // Add some randomness to the position
              sampledPositions.push(
                (positions[baseIndex] as number) + (Math.random() - 0.5) * 0.05,
                (positions[baseIndex + 1] as number) + (Math.random() - 0.5) * 0.05,
                (positions[baseIndex + 2] as number) + (Math.random() - 0.5) * 0.05,
              );

              // Random neon color
              const hue = Math.random();
              const saturation = 0.8 + Math.random() * 0.2;
              const lightness = 0.5 + Math.random() * 0.3;
              color.setHSL(hue, saturation, lightness);
              sampledColors.push(color.r, color.g, color.b);
            }
          }

          console.log(`Generated ${sampledPositions.length / 3} particles`);

          // --- Create Buffer Geometry for Particles ---
          const particleGeometry = new THREE.BufferGeometry();
          const finalPositions = new Float32Array(sampledPositions);

          if (finalPositions.length === 0) {
            throw new Error("No particle positions were generated.");
          }

          particleGeometry.setAttribute("position", new THREE.BufferAttribute(finalPositions, 3));
          particleGeometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(sampledColors), 3));

          originalPositions = new Float32Array(finalPositions.length);
          originalPositions.set(finalPositions);

          // --- Create Particle System ---
          particleSystem = new THREE.Points(particleGeometry, particleMaterial);
          scene.add(particleSystem);

          console.log("Particle system created and added to scene");

          // Clean up intermediate geometry
          textGeometry.dispose();
          nonIndexedGeometry.dispose();

          setIsLoading(false);

          // Start animation
          animate();
        } catch (error) {
          console.error("Error during particle generation:", error);
          setError(`Error creating particles: ${error instanceof Error ? error.message : "Unknown error"}`);
          setIsLoading(false);
        }
      },
      // onProgress callback
      (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% font loaded"),
      // onError callback
      (err) => {
        console.error("Font loading failed:", err);
        setError("Error loading the 3D font. Cannot display animation.");
        setIsLoading(false);
      },
    );

    // === Scroll Animation Logic ===
    let scrollY = window.scrollY;
    const maxScrollEffect = 600; // Adjust scroll distance if needed

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // === Animation Loop ===
    const clock = new THREE.Clock();
    let animationFrameId: number | null = null;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Rotate test cube if it's still in the scene
      if (scene.children.includes(testCube)) {
        testCube.rotation.x = elapsedTime;
        testCube.rotation.y = elapsedTime * 0.5;
      }

      // --- Particle Animation Based on Scroll ---
      if (particleSystem && originalPositions) {
        const positions = particleSystem.geometry.attributes.position.array;
        const scrollFactor = Math.min(scrollY / maxScrollEffect, 1.0);

        for (let i = 0; i < positions.length; i += 3) {
          const ox = originalPositions[i];
          const oy = originalPositions[i + 1];
          const oz = originalPositions[i + 2];

          const randomFactor = 5.5; // Slightly increased spread
          const speedFactor = 0.4;
          const offsetX = Math.sin(oy * 20 + elapsedTime * speedFactor + ox * 5) * scrollFactor * randomFactor;
          const offsetY = Math.cos(ox * 20 + elapsedTime * speedFactor + oy * 5) * scrollFactor * randomFactor;
          const offsetZ = Math.sin((ox + oy) * 10 + elapsedTime * speedFactor) * scrollFactor * randomFactor; // More Z spread now

          positions[i] = ox + offsetX;
          positions[i + 1] = oy + offsetY;
          positions[i + 2] = oz + offsetZ;
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;

        // Rotate the whole system
        particleSystem.rotation.y = elapsedTime * 0.02; // Slower rotation
      }

      // --- Render the Scene ---
      renderer.render(scene, camera);
    }

    // Start animation immediately with test cube
    animate();

    // === Handle Window Resize ===
    const handleResize = () => {
      if (!canvasRef.current) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      console.log("Cleaning up Three.js resources");
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);

      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }

      if (particleSystem) {
        scene.remove(particleSystem);
        particleSystem.geometry.dispose();
        particleMaterial.dispose();
      }

      scene.remove(testCube);
      testCube.geometry.dispose();
      (testCube.material as THREE.Material).dispose();

      renderer.dispose();
    };
  }, [text]);

  return (
    <div className="relative h-screen w-full">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{ display: "block" }} // Ensure canvas is displayed
      />

      {isLoading && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-white p-5 rounded-lg z-10">
          Loading animation...
        </div>
      )}

      {error && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 text-red-500 p-5 rounded-lg z-10">
          {error}
        </div>
      )}

      <h1 className="opacity-0 text-5xl font-bold text-center pt-[45vh]">{text}</h1>
    </div>
  );
}
