import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const initParticles = async (engine) => {
  await loadSlim(engine);
};

const ParticlesBackground = () => {
  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 60,

      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "attract",
            parallax: {
              enable: false,
              force: 60,
              smooth: 10,
            },
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          attract: {
            distance: 200,
            duration: 0.4,
            factor: 5,
          },
        },
      },

      particles: {
        color: {
          value: "#ff6347",
        },

        paint: {
          color: {
            value: "#ff6347",
          },
          fill: {
            enable: true,
            color: {
              value: "#ff6347",
            },
          },
          stroke: {
            width: 0,
            color: {
              value: "#ff6347",
            },
          },
        },

        number: {
          value: 100,
          density: {
            enable: true,
            width: 800,
            height: 800,
          },
        },

        color: {
          value: "#ff6347",
          animation: {
            enable: false,
          },
        },

        shape: {
          type: "circle",
          options: {
            circle: {
              fill: true,
            },
          },
        },

        links: {
          enable: true,
          distance: 110,
          color: "#ff6347",
          opacity: 0.7,
          width: 1.2,
        },

        move: {
          enable: true,
          speed: 1.5,
          outModes: {
            default: "out",
          },
        },

        opacity: {
          value: {
            min: 0.35,
            max: 0.85,
          },
        },

        size: {
          value: {
            min: 1.5,
            max: 3.5,
          },
        },
      },

      detectRetina: true,
    }),
    [],
  );

  return (
    <ParticlesProvider init={initParticles}>
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "auto",
        }}
      />
    </ParticlesProvider>
  );
};

export default ParticlesBackground;
