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
            <div className={styles.modal_page_hashtag}>
              {item.tags.map((tag) => (
                <span>{tag}</span>
              ))}
            </div>

            <div className={styles.detail_wrapper}>
              {item.id >= 1 && (
                <div>
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
                    {item.descs.map((desc, index) => (
                      <ul key={index}>
                        <li>{desc}</li>
                      </ul>
                    ))}
                  </div>
                </div>
              )}
              {item.id <= 1 && (
                <div>
                  <div className={styles.line}></div>
                  <div className={styles.detail_text}>
                    <div className={styles.bookmark_title}>
                      <FaHashtag className={styles.bookmark} />
                      날씨 조회
                    </div>
                    {item.descs_one.map((descs_one_list, index) => (
                      <ul key={index}>
                        <li>{descs_one_list}</li>
                      </ul>
                    ))}
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.detail_text}>
                    <div className={styles.bookmark_title}>
                      <FaHashtag className={styles.bookmark} />
                      위치 기반 미세먼지
                    </div>
                    {item.descs_two.map((descs_two_list, index) => (
                      <ul key={index}>
                        <li>{descs_two_list}</li>
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
