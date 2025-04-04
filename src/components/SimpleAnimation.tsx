
import { useEffect, useRef } from "react";

export default function SimpleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    console.log("Canvas initialized");

    // Get 2D context
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Could not get 2D context");
      return;
    }

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log(`Canvas resized to ${canvas.width}x${canvas.height}`);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Create particles
    const particles: {
      x: number;
      y: number;
      size: number;
      color: string;
      vx: number;
      vy: number;
      originalX: number;
      originalY: number;
      speed: number;
      angle: number;
      noiseOffsetX: number;
      noiseOffsetY: number;
    }[] = [];

    // Generate particles in the shape of text
    const text = "Apply";
    ctx.font = "bold 120px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Measure text to center it
    const textWidth = ctx.measureText(text).width;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Draw text to a temporary canvas to sample pixels
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;

    tempCanvas.width = textWidth + 100; // Add padding
    tempCanvas.height = 200;

    tempCtx.font = "bold 120px Arial";
    tempCtx.fillStyle = "white";
    tempCtx.textAlign = "center";
    tempCtx.textBaseline = "middle";
    tempCtx.fillText(text, tempCanvas.width / 2, tempCanvas.height / 2);

    // Sample pixels from the text
    const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
    const data = imageData.data;

    // Create particles from non-transparent pixels
    for (let y = 0; y < tempCanvas.height; y += 3) {
      // Increased density
      for (let x = 0; x < tempCanvas.width; x += 3) {
        const index = (y * tempCanvas.width + x) * 4;
        if (data[index + 3] > 0) {
          // If pixel is not transparent
          const particleX = centerX - textWidth / 2 + x;
          const particleY = centerY - 100 / 2 + y;

          // Random neon color
          const hue = Math.floor(Math.random() * 360);
          const color = `hsl(${hue}, 100%, 60%)`;

          // Create a unique angle and speed for each particle
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.5 + Math.random() * 2;

          particles.push({
            x: particleX,
            y: particleY,
            size: 1.5 + Math.random() * 2.5, // Slightly smaller for more detail
            color: color,
            vx: 0,
            vy: 0,
            originalX: particleX,
            originalY: particleY,
            speed: speed,
            angle: angle,
            noiseOffsetX: Math.random() * 1000,
            noiseOffsetY: Math.random() * 1000,
          });
        }
      }
    }

    console.log(`Created ${particles.length} particles`);

    // Animation variables
    let scrollY = 0;
    let documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    // Handle scroll
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    // Handle resize to recalculate document height
    const handleResize = () => {
      setCanvasSize();
      documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Simple easing function for smoother transitions
    const easeOutCubic = (x: number): number => {
      return 1 - Math.pow(1 - x, 3);
    };

    // Simplex noise approximation for smooth random movement
    const noise = (x: number, y: number) => {
      return Math.sin(x * 0.1) * Math.cos(y * 0.1) * 2;
    };

    // Animation loop
    let animationId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      const deltaTime = Math.min(time - lastTime, 50) / 16; // Cap delta and normalize to ~60fps
      lastTime = time;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate scroll progress (0 to 1)
      // Subtract viewport height to ensure we reach 1.0 when the bottom of the page is visible
      const maxScroll = documentHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / maxScroll, 1.0);

      // Apply easing for smoother effect
      const easedProgress = easeOutCubic(scrollProgress);

      // Update and draw particles
      particles.forEach((particle) => {
        if (easedProgress > 0) {
          // Calculate direction based on particle's unique angle
          const dirX = Math.cos(particle.angle);
          const dirY = Math.sin(particle.angle);

          // Add some perlin-like noise for organic movement
          const noiseX = noise(particle.noiseOffsetX + time * 0.001, particle.noiseOffsetY);
          const noiseY = noise(particle.noiseOffsetY + time * 0.001, particle.noiseOffsetX);

          // Calculate distance from original position
          const maxDistance = 1000; // Maximum distance particles can travel
          const distanceFactor = easedProgress * maxDistance;

          // Calculate target position
          const targetX = particle.originalX + dirX * distanceFactor;
          const targetY = particle.originalY + dirY * distanceFactor;

          // Add noise to target position
          const noisyTargetX = targetX + noiseX * 100 * easedProgress;
          const noisyTargetY = targetY + noiseY * 100 * easedProgress;

          // Smooth movement towards target
          particle.x += (noisyTargetX - particle.x) * 0.05 * deltaTime;
          particle.y += (noisyTargetY - particle.y) * 0.05 * deltaTime;

          // Add slight gravity effect
          particle.y += 0.2 * easedProgress * deltaTime;

          // Adjust particle size based on scroll
          const sizeMultiplier = 1 + easedProgress * 0.5;

          // Draw particle with glow effect for neon look
          ctx.save();

          // Outer glow
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * sizeMultiplier * 2, 0, Math.PI * 2);
          ctx.fillStyle = particle.color.replace("60%", "30%");
          ctx.globalAlpha = 0.2 * (1 - easedProgress * 0.5); // Fade glow as particles disperse
          ctx.fill();

          // Inner glow
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * sizeMultiplier, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = 1 - easedProgress * 0.3; // Slightly fade as particles disperse
          ctx.fill();

          ctx.restore();
        } else {
          // When not scrolled, draw particles at original position
          ctx.beginPath();
          ctx.arc(particle.originalX, particle.originalY, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    return () => {
      console.log("Cleaning up animation");
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative h-screen w-full">
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          display: "block",
          backgroundColor: "rgba(5, 5, 5, 0.1)", // Slightly visible background to confirm canvas is rendering
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          padding: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          zIndex: 2,
          borderRadius: "4px",
        }}
      >
        Canvas Debug: If you can see this, the canvas container is rendering
      </div>
    </div>
  );
}
