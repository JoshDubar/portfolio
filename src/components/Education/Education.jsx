import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <div className={styles.educationContainer}>
      <h2 className={styles.educationHeading}>Education</h2>
      <div className={styles.academic}>
        <h3>Academic</h3>

        <div>
          <h3>University of Melbourne</h3>
          <div className={styles.courseName}>
            Bachelor of Science in Computing and Software Systems
          </div>
          <div className={styles.coursework}>
            <div>Relevant Coursework:</div>
            <ul className={styles.subjectList}>
              <li>IT Project</li>
              <li>Web Information Technologies</li>
              <li>Computer Systems</li>
              <li>Declarative Programming</li>
              <li>Object Oriented Programming</li>
              <li>Database systems</li>
              <li>Design of Algorithms</li>
              <li>Artificial Intelligence</li>
              <li>Foundation of Algorithms</li>
              <li>Software Modelling and Design</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Auckland Grammar School</h3>
          <div className={styles.courseName}>GCE A-Levels</div>
          <div className={styles.coursework}>
            <div>Subjects:</div>
            <ul>
              <li>Mathematics</li>
              <li>Physics</li>
              <li>Business Studies</li>
              <li>English</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.certifications}>
        <h3>Certifications</h3>
        <div>
          <h3>AWS</h3>
          <div className={styles.courseName}>
            AWS Certified Solutions Architect – Associate Certification
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
