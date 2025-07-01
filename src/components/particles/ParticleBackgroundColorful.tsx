import React, { useCallback, useMemo } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container, ISourceOptions } from "tsparticles-engine";
import { useIsMobile } from '@/hooks/use-mobile';

const ParticleBackgroundColorful = () => {
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
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4,
          speed: 1,
          factor: 5,
          maxSpeed: 50
        },
      },
    },
    particles: {
      color: {
        value: ["#3b82f6", "#9333ea", "#ec4899", "#fb923c", "#22c55e", "#ef4444", "#f59e0b"],
        animation: {
          enable: true,
          speed: 20,
          sync: false
        }
      },
      links: {
        enable: false,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 0.5,
        straight: false,
        attract: {
          enable: false,
        }
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: isMobile ? 40 : 80,
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 4 },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 2,
          sync: false
        }
      },
    },
    detectRetina: true,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 40
            }
          }
        }
      }
    ]
  }), [isMobile]);

  if (isMobile) return null;

  return (
    <Particles
      id="tsparticles-colorful"
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

export default ParticleBackgroundColorful;