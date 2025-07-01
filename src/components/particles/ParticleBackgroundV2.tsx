import React, { useCallback, useMemo } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container, ISourceOptions } from "tsparticles-engine";
import { useIsMobile } from '@/hooks/use-mobile';

const ParticleBackgroundV2 = () => {
  const isMobile = useIsMobile();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: 0.5,
            color: {
              value: ["#3b82f6", "#9333ea", "#ec4899", "#fb923c", "#22c55e", "#ef4444", "#f59e0b"]
            }
          }
        },
      },
    },
    particles: {
      color: {
        value: "#8b5cf6",
      },
      links: {
        color: {
          value: ["#3b82f6", "#9333ea", "#ec4899", "#fb923c", "#22c55e", "#ef4444", "#f59e0b"]
        },
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.8,
        straight: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: isMobile ? 30 : 60,
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1,
          sync: false
        }
      },
    },
    detectRetina: true,
  }), [isMobile]);

  if (isMobile) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackgroundV2;