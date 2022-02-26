import { UpOutlined } from "@ant-design/icons";
import React from "react";
import { scrollToSection } from "../../utils";
import styles from "./TopArrow.module.css";

const TopArrow = () => {
  return (
    <UpOutlined
      onClick={(e) => scrollToSection(e, "hero")}
      className={styles.topArrow}
    />
  );
};

export default TopArrow;
