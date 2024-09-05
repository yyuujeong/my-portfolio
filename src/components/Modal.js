import React from "react";
import styles from "../styles/Modal.module.css";
import { FaTimes } from "react-icons/fa";

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
                    <a href={item.github} target="_blank">
                      깃허브
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
            <div className={styles.groupB_category}>
              {item.category}
            </div>
            <div className={styles.groupB_date}>
              {item.date}
            </div>
            <div className={styles.modal_page_hashtag}>
              {item.tags.map((tag) => (
                <span>{tag}</span>
              ))}
            </div>
            <div className={styles.detail_wrapper}>
              {item.id >= 1 && (
                <div>
                  <div className={styles.detail_text}>
                    {item.infos.map((info) => (
                      <ul>
                        <li>{info}</li>
                      </ul>
                    ))}
                  </div>
                  <div className={styles.detail_text}>
                    <div className={styles.bookmark_title}>
                      <div>개발 내용</div>
                    </div>
                    {item.descs.map((desc, index) => (
                      <ul key={index}>
                        <li>{desc}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
