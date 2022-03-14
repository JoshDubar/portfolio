import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./About.module.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.right}>
        <h2 className={styles.heading}>Who am I?</h2>
        <p>
          I'm a full stack Software engineer who is extremely eager to gain an
          in depth understanding of all things web. I love working in a fast
          paced team with people who are all driven towards achieving a common
          goal, while still dedicating time to assist in the growth of those
          around them. I also value the importance of maintaining a positive and
          friendly relationship with those around me, as I find that these
          relationships are what makes coming into work everyday truly
          enjoyable.
        </p>
        {(isDesktop || expanded) && (
          <>
            <p>
              Over the last few years, I've been working hard to become a well
              rounded enigneer who isn't afraid to approach complex problems. I
              love a challenge and if I have the chance to learn something new
              along the way, then that makes it all the better. My current focus
              is on upskilling in all things server-side, which has had me
              spending most of my time on becoming familiar with cloud services,
              microservice architecture and database engineering.
            </p>
            <p>
              Outside of technology, I enjoy weightlifting, eating yummy food,
              and playing video games.
            </p>
          </>
        )}
        {!isDesktop && (
          <div className={styles.expand} onClick={() => setExpanded((p) => !p)}>
            <span>{expanded ? "less" : "more"}</span>
            {expanded ? <UpOutlined /> : <DownOutlined />}
          </div>
        )}
      </div>
      <div className={styles.left}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.skillsContainer}>
          <Image
            src="/ts.png"
            width="80"
            height="80"
            className={styles.ts}
            alt="typescript"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.typescriptlang.org/", "_blank");
            }}
          />
          <Image
            src="/react.png"
            width="80"
            height="80"
            className={styles.react}
            alt="react"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://reactjs.org/", "_blank");
            }}
          />
          <Image
            src="/node.png"
            width="80"
            height="80"
            className={styles.node}
            alt="nodejs"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://nodejs.org/en/", "_blank");
            }}
          />
          <Image
            src="/golang.png"
            width="80"
            height="80"
            className={styles.golang}
            alt="golang"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://go.dev/", "_blank");
            }}
          />
          <Image
            src="/aws.png"
            width="80"
            height="80"
            className={styles.aws}
            alt="aws"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://aws.amazon.com/", "_blank");
            }}
          />
          <Image
            src="/postgres.png"
            width="80"
            height="80"
            className={styles.postgres}
            alt="postgreSQL"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.postgresql.org/", "_blank");
            }}
          />
          <Image
            src="/next.png"
            width="80"
            height="80"
            className={styles.next}
            alt="nextjs"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://nextjs.org/", "_blank");
            }}
          />
          <Image
            src="/java.png"
            width="80"
            height="80"
            className={styles.java}
            alt="java"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.java.com/en/", "_blank");
            }}
          />
          <Image
            src="/linux.png"
            width="80"
            height="80"
            className={styles.linux}
            alt="linux"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.linux.org/", "_blank");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
