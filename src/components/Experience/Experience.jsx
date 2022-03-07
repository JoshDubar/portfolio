import React from "react";
import styles from "./Experience.module.css";

const Circle = ({ color, onClick, ...props }) => (
  <div className={styles.circle} onClick={() => onClick()} {...props} />
);

const Experience = () => {
  const altStyle = {
    left: "unset",
    right: "45px",
  };

  const [activeItem, setActiveItem] = React.useState(4);
  const timelineItems = [
    {
      circleColor: "#EB930F",
      text: "Localz",
      alt: false,
    },
    {
      circleColor: "#8ECAF4",
      text: "Nasdaq",
      alt: true,
    },
    {
      circleColor: "#094183",
      text: "University of Melbourne",
      alt: false,
      customWidth: "150px",
    },
    {
      circleColor: "#03363D",
      text: "Zendesk",
      alt: true,
    },
    {
      circleColor: "#8ECAF4",
      text: "DiUS Computing",
      alt: false,
    },
  ];

  const timelineItemOnClickHandler = (index) => {
    setActiveItem(index);
  };

  return (
    <div className={styles.experienceContainer}>
      <h2>My Experience</h2>
      <div className={styles.timeline}>
        {timelineItems.map(({ circleColor, text, alt, customWidth }, index) => (
          <div className={styles.timelineItem} key={index}>
            <Circle
              color={circleColor}
              onClick={() => timelineItemOnClickHandler(index)}
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
    </div>
  );
};

export default Experience;
