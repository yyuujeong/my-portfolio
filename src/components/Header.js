import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header_container}>
        <a href="/my-portfolio">
          <img src={logo} alt="헤더로고" className={styles.header_logo} />
        </a>

        <div className={styles.menu_toggle} onClick={handleToggle}>
          {isToggle ? <FaTimes /> : <FaBars />}
        </div>
        {isToggle && (
          <div className={styles.navi_container}>
            <div className={styles.navi}>
              <Link
                to="aboutskill"
                spy={true}
                smooth={true}
                className={styles.navi_lists}
                onClick={handleToggle}
              >
                <button className={styles.navi_list}>소개 & 기술</button>
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                className={styles.navi_lists}
                onClick={handleToggle}
              >
                <button className={styles.navi_list}>프로젝트</button>
              </Link>
            </div>
          </div>
        )}

        {/* pc */}
        <div className={styles.navi_container_pc}>
          <div className={styles.navi_pc}>
            <Link
              to="aboutskill"
              spy={true}
              smooth={true}
              className={styles.navi_lists_pc}
            >
              <button className={styles.navi_list_pc}>소개 & 기술</button>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              className={styles.navi_lists_pc}
            >
              <button className={styles.navi_list_pc}>프로젝트</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
