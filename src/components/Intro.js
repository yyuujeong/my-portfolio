import React from "react";
import styles from "../styles/Intro.module.css";
import { ReactComponent as Web } from "../svg/web.svg";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro_container}>
        <Web width="100%" height="100vh" className={styles.svg} />
        <ul className={styles.intro_title}>
          <li className={styles.intro_title_line}>
            <strong>YUJEONG</strong>
          </li>
          <li className={styles.intro_title_line}>
            <strong>PORTFOLIO</strong>
          </li>
        </ul>
      </div>

      <Link to="aboutskill" spy={true} smooth={true}>
        <FaCaretDown className={styles.down_arrow} />
      </Link>
    </section>
  );
};

export default Intro;
