import React, { useCallback, useMemo } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container, ISourceOptions } from "tsparticles-engine";
import { useIsMobile } from '@/hooks/use-mobile';

const ParticleBackgroundGradient = () => {
  const isMobile = useIsMobile();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Gradient particles loaded");
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10
          }
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 150,
          duration: 0.4,
          factor: 5,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad"
        },
        push: {
          quantity: 4,
          particles: {
            color: {
              value: ["#3b82f6", "#9333ea", "#ec4899", "#fb923c", "#22c55e", "#ef4444", "#f59e0b"]
            },
            opacity: {
              value: 0.8
            }
          }
        }
      },
    },
    particles: {
      color: {
        value: "#8b5cf6",
        animation: {
          enable: false
        }
      },
      links: {
        enable: false
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
        speed: 0.8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: isMobile ? 30 : 80,
        limit: isMobile ? 50 : 150,
      },
      opacity: {
        value: 0.5,
        random: {
          enable: true,
          minimumValue: 0.3
        },
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.3,
          sync: false
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 4 },
        random: {
          enable: true,
          minimumValue: 2
        },
        animation: {
          enable: false
        }
      },
      // Create gradient effect on particles near mouse
      stroke: {
        width: 0,
        color: "#000000"
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
          color: {
            value: ["#3b82f6", "#9333ea", "#ec4899", "#fb923c", "#22c55e", "#ef4444", "#f59e0b"]
          }
        }
      }
    },
    detectRetina: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 30
            },
            move: {
              speed: 0.5
            }
          }
        }
      }
    ]
  }), [isMobile]);

  if (isMobile) return null;

  return (
    <Particles
      id="tsparticles-gradient"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      className="particles-gradient"
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

export default ParticleBackgroundGradient;