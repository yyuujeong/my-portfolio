import React from "react";
import styles from "../styles/Footer.module.css";
import { FaCaretSquareUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className={styles.top_btn}>
        <FaCaretSquareUp className={styles.xi_caret_up_square} onClick={scrollToTop}/>
      </div>
      <footer className={styles.footer}>
        <p className={styles.footer_sentence}>
          Copyright&copy;2024 Nayujeong All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
