import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesOptions = {
    particles: {
      number: { value: 20, density: { enable: true, value_area: 800 } },
      color: {
        value: [
         "#FFC0CB"
        ],
      },
      shape: {
        type: "square", 
        stroke: { width: 0, color: "#FFC0CB" },
      
        
      },
      opacity: {
        value: 1.5,
        random: false,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 20,
        random: true,
        anim: {
          enable: false,
          speed: 43.15684315684316,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 100.82952832645452,
        color: "#FFC0CB",
        opacity: 1.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 109.63042366068159,
          size: 13,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  };
  return <Particles className="particles" params={particlesOptions} />;
};

export default ParticlesBackground;
