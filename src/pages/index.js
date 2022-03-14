import "antd/dist/antd.css";
import Head from "next/head";
import React from "react";
import {
  NavBar,
  Hero,
  Particles,
  About,
  Experience,
  Projects,
  Education,
  Contact,
  Socials,
  TopArrow,
  MobileMenu,
} from "../components";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <div className="page">
      <Head>
        <title>Joshua Dubar | Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I'm a Software Engineer with a passion for making lives easier through building highly functional, reliable and scalable web applications."
        />
      </Head>
      {showMobileMenu ? (
        <MobileMenu setShowMobileMenu={setShowMobileMenu} />
      ) : (
        <>
          <Particles />
          <Socials />
          <TopArrow />
          <section id="hero">
            <NavBar setShowMobileMenu={setShowMobileMenu} />
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
}
