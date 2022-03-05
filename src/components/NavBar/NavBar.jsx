import React from "react";
import { useMediaQuery } from "react-responsive";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { scrollToSection } from "../../utils";

const NavBar = ({ setShowMobileMenu }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      {isDesktop ? (
        <>
          <nav className={styles.nav}>
            <a onClick={(e) => scrollToSection(e, "about")}>About</a>
            <a onClick={(e) => scrollToSection(e, "experience")}>Experience</a>
            <a onClick={(e) => scrollToSection(e, "projects")}>Projects</a>
            <a onClick={(e) => scrollToSection(e, "education")}>Education</a>
          </nav>
          <Button
            shape="round"
            className={styles.contactButton}
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Get in touch
          </Button>
        </>
      ) : (
        <div
          className={styles.hamburgerContainer}
          onClick={() => setShowMobileMenu(true)}
        >
          <MenuOutlined />
        </div>
      )}
    </div>
  );
};

export default NavBar;
