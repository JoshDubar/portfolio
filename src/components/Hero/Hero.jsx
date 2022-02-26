import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.heroTitle}>Hey, I'm Josh</h1>
        <p className={styles.heroP}>
          I'm a Software Engineer with a passion for making lives easier through
          building highly functional, reliable and scalable web applications.
        </p>
      </div>
    </div>
  );
};

export default Hero;
