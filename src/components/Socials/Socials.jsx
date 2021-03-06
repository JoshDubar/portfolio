import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import React from "react";
import styles from "./Socials.module.css";

const Socials = ({ className }) => {
  return (
    <div className={className || styles.socialsContainer}>
      <a href="https://www.linkedin.com/in/joshdubar/" target="_blank">
        <LinkedinFilled color="black" />
      </a>

      <a href="https://github.com/JoshDubar" target="_blank">
        <GithubFilled color="black" />
      </a>
    </div>
  );
};

export default Socials;
