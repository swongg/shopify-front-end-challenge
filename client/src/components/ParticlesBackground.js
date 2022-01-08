import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
    params={{
      particles: {
        number: { value: 35, density: { enable: true, value_area: 800 } },
        color: {
          value: [
            'BB4D10',
            '#820E42',
            '#BD740F',
            '#248592',
            '#5F4DAF',
            '#8BA00F',
          ],
        },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 3 },
          image: { src: 'img/github.svg', width: 100, height: 100 },
        },
        opacity: {
          value: 1.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 9,
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
          color: '#ffffff',
          opacity: 1.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'bubble' },
          onclick: { enable: false, mode: 'push' },
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
    }}
   
  />
  );
};

export default ParticlesBackground;
