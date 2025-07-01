import React, { useCallback, useMemo } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container, ISourceOptions } from "tsparticles-engine";
import { useIsMobile } from '@/hooks/use-mobile';

const ParticleBackgroundStable = () => {
  const isMobile = useIsMobile();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles container loaded");
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
          mode: ["grab", "bubble"],
          parallax: {
            enable: false,
            force: 2,
            smooth: 10
          }
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            opacity: 0.4,
            color: "#8b5cf6"
          }
        },
        bubble: {
          distance: 200,
          size: 6,
          duration: 0.3,
          opacity: 0.8,
          color: {
            value: ["#3b82f6", "#9333ea", "#ec4899", "#fb923c", "#22c55e", "#ef4444", "#f59e0b"]
          }
        }
      },
    },
    particles: {
      color: {
        value: "#8b5cf6",
      },
      links: {
        color: "#8b5cf6",
        distance: 150,
        enable: true,
        opacity: 0.2,
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
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: isMobile ? 30 : 60,
      },
      opacity: {
        value: { min: 0.3, max: 0.6 },
        animation: {
          enable: false
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 4 },
        animation: {
          enable: false
        }
      },
    },
    detectRetina: true,
  }), [isMobile]);

  if (isMobile) return null;

  return (
    <Particles
      id="tsparticles-stable"
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
        pointerEvents: 'all',
      }}
    />
  );
};

export default ParticleBackgroundStable;