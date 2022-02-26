export default {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1080,
      },
    },
    color: {
      value: ["#EB930F", "#8ECAF4", "#03363D", "#094183"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#ffffff",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.7,
      random: false,
      anim: {
        enable: true,
        speed: 0,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
};
