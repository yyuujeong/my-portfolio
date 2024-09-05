import React from "react";
import styles from "../styles/Intro.module.css";
import { ReactComponent as Web } from "../svg/web.svg";
import { FaGithub} from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro_container}>
        <Web width="100%" height="100vh" className={styles.svg} />
        <ul className={styles.intro_title}>
          <li className={styles.intro_title_line}>
            <strong>인터랙티브한 </strong>
          </li>
          <li className={styles.intro_title_line}>
            <strong>서비스를 추구하는 </strong>
          </li>
          <li className={styles.intro_title_line}>
            <p>나유정입니다.</p>
          </li>
        </ul>
        <div className={styles.intro_resume_btn}>
          <a href="https://even-cowl-554.notion.site/8894c12eaf9a41bcbb33221d0ef366e5?pvs=4" target="_blank">
            이력서
          </a>
        </div>
      </div>
      <Link to="aboutskill" spy={true} smooth={true}>
        <FaCaretDown className={styles.down_arrow} />
      </Link>
    </section>
  );
};

export default Intro;
