import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import Logo from "../Logo/Logo";
import styles from "./MobileMenu.module.css";
import { Button } from "antd";
import Socials from "../Socials/Socials";

const MobileMenu = ({ setShowMobileMenu }) => {
  const menuConfig = [
    {
      href: "#about",
      onClick: () => setShowMobileMenu(false),
      text: "About",
    },
    {
      href: "#experience",
      onClick: () => setShowMobileMenu(false),
      text: "Experience",
    },
    {
      href: "#projects",
      onClick: () => setShowMobileMenu(false),
      text: "Projects",
    },
    {
      href: "#education",
      onClick: () => setShowMobileMenu(false),
      text: "Education",
    },
  ];

  return (
    <div className={styles.menuContainer}>
      <div
        className={styles.exitContainer}
        onClick={() => setShowMobileMenu(false)}
      >
        <CloseOutlined />
      </div>
      <div className={styles.menuNavContainer}>
        <div className={styles.menuLogoContainer}>
          <Logo />
        </div>

        {menuConfig.map(({ href, onClick, text }) => (
          <a href={href} onClick={onClick}>
            {text}
          </a>
        ))}
        <a href="#contact">
          <Button
            shape="round"
            className={styles.contactButton}
            onClick={() => setShowMobileMenu(false)}
          >
            Get in touch
          </Button>
        </a>
        <Socials className={styles.socialsMenuContainer} />
      </div>
    </div>
  );
};

export default MobileMenu;
