import React, { useCallback, useMemo } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container, ISourceOptions } from "tsparticles-engine";
import { useIsMobile } from '@/hooks/use-mobile';

const ParticleBackgroundFinal = () => {
  const isMobile = useIsMobile();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Final particles implementation loaded");
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "attract",
          parallax: {
            enable: false,
            force: 10,
            smooth: 10
          }
        },
        onClick: {
          enable: false,
        },
        resize: true,
      },
      modes: {
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 3,
          maxSpeed: 50,
          speed: 1
        }
      },
    },
    particles: {
      color: {
        value: "#8b5cf6",
      },
      links: {
        enable: false
      },
      collisions: {
        enable: false,
      },
      move: {
        angle: {
          offset: 0,
          value: 90
        },
        decay: 0,
        direction: "none",
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50
        },
        outModes: {
          default: "out",
          bottom: "out",
          left: "out",
          right: "out",
          top: "out"
        },
        random: true,
        size: false,
        speed: 1,
        spin: {
          acceleration: 0,
          enable: false
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fillColor: {
            value: "#000000"
          }
        },
        vibrate: false,
        warp: false
      },
      number: {
        density: {
          enable: true,
          area: 1000,
          factor: 1000
        },
        limit: 0,
        value: isMobile ? 40 : 80,
      },
      opacity: {
        animation: {
          count: 0,
          enable: true,
          speed: 0.5,
          sync: false,
          destroy: "none",
          startValue: "random",
          minimumValue: 0.3
        },
        random: {
          enable: true,
          minimumValue: 0.3
        },
        value: {
          min: 0.3,
          max: 0.8
        }
      },
      reduceDuplicates: false,
      shape: {
        character: {
          fill: false,
          font: "Verdana",
          style: "",
          value: "*",
          weight: "400"
        },
        image: [],
        polygon: {
          sides: 5
        },
        stroke: {
          color: "#000000",
          width: 0
        },
        type: "circle"
      },
      size: {
        animation: {
          count: 0,
          enable: false,
          speed: 40,
          sync: false,
          destroy: "none",
          startValue: "random",
          minimumValue: 0.1
        },
        random: {
          enable: true,
          minimumValue: 2
        },
        value: {
          min: 2,
          max: 4
        }
      },
      stroke: {
        width: 0
      },
      zIndex: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [],
    smooth: false,
    style: {},
    themes: [],
    zLayers: 100,
    detectRetina: true
  }), [isMobile]);

  if (isMobile) return null;

  return (
    <Particles
      id="tsparticles-final"
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

export default ParticleBackgroundFinal;