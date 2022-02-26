import React from "react";
import ReactTsParticles from "react-tsparticles";
import particlesConfig from "./particlesConfig";
import styles from "./Particles.module.css";

const Particles = () => {
  return (
    <ReactTsParticles
      id="tsparticles"
      options={particlesConfig}
      className={styles.particles}
    >
      Particles
    </ReactTsParticles>
  );
};

export default Particles;
