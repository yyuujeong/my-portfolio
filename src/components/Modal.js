import React from "react";
import styles from "../styles/Modal.module.css";
import { FaTimes, FaHashtag } from "react-icons/fa";

const Modal = ({ modal, openModal, closeModal }) => {
  return (
    <div className={styles.modal_container} onClick={closeModal}>
      {modal.map((item) => {
        return (
          <div
            className={styles.modal_wrapper}
            openmodal={openModal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.detail_header}>
              <h1>{item.title}</h1>
              <div>
                <ul className={styles.detail_btns}>
                  <li className={styles.detail_btn}>
                    <a href={item.site} target="_blank">
                      URL
                    </a>
                  </li>
                  <FaTimes
                    onClick={closeModal}
                    className={styles.detail_close_btn}
                  />
                </ul>
              </div>
            </div>
            <div className={styles.detail_content}>
              <img src={item.img} alt={item.name} />
            </div>
            <div className={styles.modal_page_hashtag}>
              {item.tags.map((tag) => (
                <span>{tag}</span>
              ))}
            </div>
            <div className={styles.detail_wrapper}>
              <div className={styles.detail_text}>
                <div className={styles.bookmark_title}>
                  <FaHashtag className={styles.bookmark} />
                  프로젝트 소개
                </div>
                {item.infos.map((info) => (
                  <ul>
                    <li>{info}</li>
                  </ul>
                ))}
              </div>
              <div className={styles.line}></div>
              <div className={styles.detail_text}>
                <div className={styles.bookmark_title}>
                  <FaHashtag className={styles.bookmark} />
                  주요기능
                </div>
                {item.descs.map((desc) => (
                  <ul>
                    <li>{desc}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
