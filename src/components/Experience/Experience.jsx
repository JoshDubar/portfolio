import React from "react";
import { experienceContent, timelineItems } from "./content";
import styles from "./Experience.module.css";

const Circle = ({ color, onClick, ...props }) => (
  <div className={styles.circle} onClick={() => onClick()} {...props} />
);

const Experience = () => {
  const altStyle = {
    left: "unset",
    right: "45px",
  };

  const [activeItem, setActiveItem] = React.useState(3);

  const { company, jobTitle, dateRange, description } =
    experienceContent[activeItem];

  return (
    <div className={styles.experienceContainer}>
      <h2 className={styles.experienceHeading}>My Experience</h2>
      <div className={styles.timeline}>
        {timelineItems.map(({ circleColor, text, alt, customWidth }, index) => (
          <div className={styles.timelineItem} key={index}>
            <Circle
              color={circleColor}
              onClick={() => setActiveItem(index)}
              style={{
                backgroundColor: index === activeItem ? circleColor : "white",
                borderColor: circleColor,
              }}
            />
            <span
              style={{ ...(alt ? altStyle : undefined), width: customWidth }}
            >
              {text}
            </span>
          </div>
        ))}
        <div className={styles.line}></div>
      </div>
      <div className={styles.experienceContent}>
        <h2>{company}</h2>
        <div className={styles.jobTitle}>{jobTitle}</div>
        <div className={styles.dateRange}>{dateRange}</div>
        {description.map((text) => (
          <p className={styles.description} key={text}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Experience;
