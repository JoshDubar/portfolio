import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import Image from "next/image";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react/cjs/react.production.min";
import { projects } from "./content";
import styles from "./Projects.module.css";

const Projects = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const [selectedProject, setSelectedProject] = useState(0);
  const { name, github, website, description } = projects[selectedProject];

  const href = () => (isDesktop ? undefined : "#project-info");

  return (
    <div className={styles.projectContainer}>
      <h2 className={styles.projectHeading}>My Projects</h2>
      <div className={styles.projectBubbleContainer}>
        <a href={href()}>
          <div
            className={styles.dribblrBubble}
            onClick={() => setSelectedProject(0)}
          >
            <Image src="/dribblr.png" width="125px" height="110px" />
          </div>
        </a>
        <a href={href()}>
          <div
            className={styles.trukkBubble}
            onClick={() => setSelectedProject(1)}
          />
        </a>
        <a href={href()}>
          <div
            className={styles.simulatorBubble}
            onClick={() => setSelectedProject(2)}
          />
        </a>
      </div>
      <div className={styles.projectInfoContainer} id="project-info">
        <div className={styles.projectTitleContainer}>
          <h2>{name}</h2>
          <a href={github} target="_blank">
            <GithubOutlined />
          </a>
          <a href={website} target="_blank">
            <LinkOutlined />
          </a>
        </div>

        {description.map((text) => (
          <p className={styles.projectDescription}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Projects;
