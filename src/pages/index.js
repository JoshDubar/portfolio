import "antd/dist/antd.css";
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
} from "../components";

export default function Home() {
  return (
    <div className="page">
      <Particles />
      <Socials />
      <TopArrow />
      <section id="hero">
        <NavBar />
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
    </div>
  );
}
